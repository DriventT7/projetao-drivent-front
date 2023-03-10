import { Label, Container } from '../../../components/Hotel/PaymentNotConfirmed';
import { Title, Subtitle, CardHotel, ContainerCard, AccommodationsTitle } from '../../../components/Hotel/PaymentConfirmed';
import { getTicket, getTicketType } from '../../../services/ticketsApi';
import { getHotels } from '../../../services/hotelApi';
import { getHotelRoomsAndBookings } from '../../../services/bookingsApi';
import { useState, useEffect } from 'react';
import useToken from '../../../hooks/useToken';
import Rooms from './Rooms';

export default function Hotel() {
  const [ticket, setTicket] = useState({});
  const [hoteis, setHoteis] = useState([]);
  const [ticketType, setTicketType] = useState({});
  const [chosenHotel, setChosenHotel] = useState();
  const [err, setErr] = useState(0);
  const [roomsInfo, setRoomsInfo] = useState();
  const [rooms, setRooms] = useState([]);
  const token = useToken();

  useEffect(() => {
    const promise = getTicket(token);
    promise.then(res => {
      setTicket(res);
    });

    promise.catch(err => {
      if(err.request.status === 404) {
        setErr(404);
      }
    });
  }, []);

  useEffect(() => {
    const promise = getTicketType(token);
    promise.then(res => {
      setTicketType(res[0]);
    });

    promise.catch(err => {
      console.log(err);
    });
  }, []);
  
  useEffect(() => {
    const promise = getHotels(token);
    promise.then(res => {
      setHoteis(res);
    });

    promise.catch(err => {
      console.log(err);
    });
  }, []);    

  function Hotel( { image, name, index, hotelId } ) { 
    function selectHotel(index) {
      setChosenHotel(index);
    }

    function getRooms(hotelId) {
      const response = getHotelRoomsAndBookings(hotelId, token);
      response.then(res => {
        setRooms(res);
        setRoomsInfo(res);
      });
  
      response.catch(err => {
        console.log(err);
      });
    }

    return (
      <CardHotel color={chosenHotel === index ? '#FFEED2' : '#EBEBEB' } onClick={function() { selectHotel(index); getRooms(hotelId);}}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <AccommodationsTitle>
          <h4>Tipos de acomoda????es</h4>
          <h5>Teste teste</h5>
        </AccommodationsTitle>
      </CardHotel>
    );
  }

  return (
    <>
      {ticket.status === 'RESERVED' || err === 404 ? 
        <Container><Label>Voc?? precisa ter confirmado pagamento antes de fazer a escolha de hospedagem</Label></Container> :
        ticket.status === 'PAID' && ticketType.includesHotel === true ?
          <>
            <Title>Escolha de hotel e quarto</Title>
            <Subtitle>Primeiro, escolha seu hotel</Subtitle>
            <ContainerCard >
              {hoteis.map((item, index) =>
                <Hotel
                  image={item.image}
                  name={item.name}
                  key={index}
                  index={index}
                  hotelId={item.id}
                />
              ) 
              }
            </ContainerCard>

            {roomsInfo === undefined ? null :  <Rooms rooms={rooms} token={token}/> }

          </> : ticketType.includesHotel === false ? 
            <Container>
              <Label>Sua modalidade de ingresso n??o inclui hospedagem Prossiga para a escolha de atividades</Label>
            </Container> : null
      }
    </>
  );
}
