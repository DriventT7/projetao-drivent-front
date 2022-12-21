import { Label, Container } from '../../../components/Hotel/PaymentNotConfirmed';
import { getTicket } from '../../../services/ticketsApi';
import { useState, useEffect } from 'react';
import useToken from '../../../hooks/useToken';

export default function Hotel() {
  const [ticket, setTicket] = useState({});
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

  return (
    <Container>
      {ticket.status === 'RESERVED' ? 
        <Label>Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem</Label> 
        : 
        'Em breve hoteis'
      }
    </Container>
  );
}
