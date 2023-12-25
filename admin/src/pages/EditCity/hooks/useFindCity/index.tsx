import { useQuery } from '@tanstack/react-query';

import api from 'api/axios';

import type { City } from '../../types';

const getCity = async (id: number): Promise<City> => {
  const { data } = await api.get(`/city/${id}`);
  return data;
};

export const useFindCity = (cityId: number) => useQuery(['city', cityId], async () => getCity(cityId), {
  enabled: !!cityId, // The query will not execute until the cityId exists
});
