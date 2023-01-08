import api from './api';

export async function getHotels(token) {
  const response = await api.get('/hotels', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getHotelsRoom(hotelInfos, token) {
  const response = await api.get(`/hotels/${hotelInfos}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
