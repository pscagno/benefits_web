import { useQuery } from '@tanstack/react-query';

import api from 'api/axios';

import type { CategoryFormData } from '../../types';

const getCategory = async (id: number): Promise<CategoryFormData> => {
    const { data } = await api.get(`/category/${id}`);
    return data;
};

export const useFindCategory = (categoryId: number) => useQuery(['category', categoryId], async () => getCategory(categoryId), {
        enabled: !!categoryId,
    });
