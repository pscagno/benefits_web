// useFindSubcategory.ts
import { useQuery } from '@tanstack/react-query';

import api from 'api/axios';

import type { Subcategory } from '../../types';

const getSubcategory = async (id: number): Promise<Subcategory> => {
  const { data } = await api.get(`/subcategory/${id}`);
  return data;
};

export const useFindSubcategory = (subcategoryId: number) =>
  useQuery(['subcategory', subcategoryId], async () => getSubcategory(subcategoryId), {
    enabled: !!subcategoryId,
  });
