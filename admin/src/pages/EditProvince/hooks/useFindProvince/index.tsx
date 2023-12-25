import { useQuery } from '@tanstack/react-query';

import api from 'api/axios';

import type { Province } from './types';

export const PROVINCE_FETCH = 'PROVINCE_FETCH';

const getProvince = async (id: number): Promise<Province> => {
  const { data } = await api.get(`/province/${id}`);
  return data;
};

export const useFindProvince = (provinceId: number) => useQuery([PROVINCE_FETCH, provinceId], async () => getProvince(provinceId), {
    enabled: !!provinceId,
  });
