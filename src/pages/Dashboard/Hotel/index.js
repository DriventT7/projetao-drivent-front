import { Label, Container } from '../../../components/Hotel/PaymentNotConfirmed';
import { Title, Subtitle, CardHotel, ContainerCard } from '../../../components/Hotel/PaymentConfirmed';
import { getTicket, getTicketType } from '../../../services/ticketsApi';
import { getHotels } from '../../../services/hotelApi';
import { useState, useEffect } from 'react';
import useToken from '../../../hooks/useToken';

export default function Hotel() {
  const [ticket, setTicket] = useState({});
  const [hoteis, setHoteis] = useState([]);
  const [ticketType, setTicketType] = useState({});
  const [chosenHotel, setChosenHotel] = useState(-1);
  const [hotelInfos, setHotelInfos] = useState();
  const token = useToken();
  
  useEffect(() => {
    const promise = getTicket(token);
    promise.then(res => {
      setTicket(res);
    });

    promise.catch(err => {
      alert(err);
    });
  }, []);

  useEffect(() => {
    const promise = getTicketType(token);
    promise.then(res => {
      setTicketType(res[0]);
    });

    promise.catch(err => {
      alert(err);
    });
  }, []);
  
  if(ticketType.includesHotel && ticket.status === 'PAID') {
    const promise = getHotels(token);
    promise.then(res => {
      setHoteis(res);
    });

    promise.catch(err => {
      alert(err);
    });
  }

  function Hotel( { image, name, index, id } ) { 
    function selectHotel(index) {
      return setChosenHotel(index);
    }

    function hotel(id) {
      return setHotelInfos(id);
    }

    return (
      <CardHotel color={chosenHotel === index ? '#FFEED2' : '#EBEBEB' } onClick={function() { selectHotel(index); hotel(id);}}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </CardHotel>
    );
  }

  return (
    <>
      {ticket.status === 'RESERVED' ? 
        <Container><Label>Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem</Label></Container> :
        ticket.status === 'PAID' && ticketType.includesHotel === true ?
          <>
            <Title>Escolha de hotel e quarto</Title>
            <Subtitle>Primeiro, escolha seu hotel</Subtitle>
            <ContainerCard>
              {hoteis.map((item, index) =>
                <Hotel
                  image={item.image}
                  name={item.name}
                  key={index}
                  index={index}
                  id={item.id}
                />
              ) 
              }
            </ContainerCard>
          </> : ticketType.includesHotel === false ? 
            <Container>
              <Label>Sua modalidade de ingresso não inclui hospedagem Prossiga para a escolha de atividades</Label>
            </Container> : null
      }
    </>
  );
}
