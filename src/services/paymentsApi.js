import api from './api';

export async function payment(ticketId, value, cardIssuer, cardLastDigits ) {
  const response = await api.post('/payment', { ticketId, value, cardIssuer, cardLastDigits });

  return response.data;
}

export async function createTicketType(name, price, isRemote, includesHotel) { //criar rota no back?
  const response = await api.post('/ticket/types', { name, price, isRemote, includesHotel });

  return response.data;
}
