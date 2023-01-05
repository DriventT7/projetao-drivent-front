import { useState } from 'react';
import { 
  Title, 
  Instructions, 
  Div, 
  Content, 
  Presencial, 
  Online, 
  NoHotel, 
  WithHotel, 
  Button } from '../../../components/Payments/payment';
import useToken from '../../../hooks/useToken';
import { toast } from 'react-toastify';
import { createTicketType } from '../../../services/paymentsApi';

export default function Payment() {
  const [selectPresencial, setSelectPresencial] = useState(false);
  const [selectOnline, setSelectOnline] = useState(false);
  const [selectNoHotel, setSelectNoHotel] = useState(false);
  const [selectWithHotel, setSelectWithHotel] = useState(false);
  const [total, setTotal] = useState(0);
  const token = useToken();

  function choosePresencial() {
    if(selectOnline) {
      setSelectOnline(false);
    }
      
    if ( selectPresencial ) {
      setSelectPresencial(false);
    }   
          
    if (!selectPresencial) {
      setSelectPresencial(true);
      setTotal(250);
    }
  }
      
  function chooseOnline() {
    if(selectPresencial) {
      setSelectPresencial(false);
    }
  
    if ( selectOnline ) {
      setSelectOnline(false);
    } 
    
    if (!selectOnline) {
      setSelectOnline(true);
      setTotal(100);
    }
  }
  
  function chooseNoHotel() {
    if(selectWithHotel) {
      setSelectWithHotel(false);
    }

    if ( selectNoHotel ) {
      setSelectNoHotel(false);
    } 
    
    if (!selectNoHotel) {
      setSelectNoHotel(true);
    }

    if (total === 600) {
      setTotal(total - 350);
    }
  }

  function chooseWithHotel() {
    if(selectNoHotel) {
      setSelectNoHotel(false);
    }

    if ( selectWithHotel ) {
      setSelectWithHotel(false);
    } 
    
    if (!selectWithHotel) {
      setSelectWithHotel(true);
      setTotal(total + 350);
    }
  }

  async function submit(event) {
    event.preventDefault();

    const isRemote = selectPresencial ? selectPresencial : selectOnline;
    const includesHotel = selectNoHotel ? selectNoHotel : selectWithHotel;

    try { 
      await createTicketType(total, isRemote, includesHotel, token);
      toast('Ingresso reservado com sucesso!');
    } catch (error) {
      toast('Não foi possível reservar seu ingresso!');
    }
  }

  return (
    <>
      <Title>
      Ingresso e Pagamento
      </Title>

      <Instructions>
      Primeiro, escolha sua modalidade de ingresso
      </Instructions>

      <Content>
        <Div>
          <Presencial onClick={ choosePresencial } selectPresencial={selectPresencial}>
            <h2>Presencial</h2> 
            <h3>R$ 250</h3>
          </Presencial> 

          <Online onClick={ chooseOnline } selectOnline={selectOnline}>
            <h2>Online</h2> 
            <h3>R$ 100</h3>
          </Online>
        </Div>
      </Content>

      {selectPresencial ? 
        <>
          <Instructions>
          Ótimo! Agora escolha sua modalidade de hospedagem
          </Instructions> 
          
          <Content>
            <Div>
              <NoHotel onClick={ chooseNoHotel } selectNoHotel={selectNoHotel}>
                <h2>Sem Hotel</h2> 
                <h3>+ R$ 0</h3>
              </NoHotel> 

              <WithHotel onClick={ chooseWithHotel } selectWithHotel={selectWithHotel}>
                <h2>Com Hotel</h2> 
                <h3>R$ 350</h3>
              </WithHotel>
            </Div>
          </Content>

          {selectNoHotel || selectWithHotel ? 
            <>
              <Instructions>
              Fechado! O total ficou em R${total}. Agora é só confirmar:
              </Instructions> 
            
              <Button onClick={submit}>
                RESERVAR INGRESSO
              </Button>
            </>

            : null} 

        </>
      
        : selectOnline ? 
          <>
            <Instructions>
            Fechado! O total ficou em R${total}. Agora é só confirmar:
            </Instructions> 
          
            <Button onClick={submit}>
              RESERVAR INGRESSO
            </Button> 
          </>
          : null
      }
    </>
  );
}

