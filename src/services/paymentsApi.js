import api from './api';

export async function payment(ticketId, value, cardIssuer, cardLastDigits ) {
  const response = await api.post('/payment', { ticketId, value, cardIssuer, cardLastDigits });

  return response.data;
}

export async function createTicketType( price, isRemote, includesHotel, token) { 
  const response = await api.post('/tickets/types', { price, isRemote, includesHotel }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}
