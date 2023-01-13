import api from './api';

export async function getHotelRoomsAndBookings(hotelId, token) {
  const response = await api.get(`/booking/${hotelId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

