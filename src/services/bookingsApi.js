import api from './api';

export async function getHotelRoomsAndBookings(hotelId, token) {
  const response = await api.get(`/booking/${hotelId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function createBooking(roomId, token) {
  console.log(roomId, 'YA!');
  const response = await api.post('/booking', { roomId }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
