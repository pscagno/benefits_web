import { useQuery } from '@tanstack/react-query';

import api from 'api/axios';

const getBenefit = async (id) => {
  const { data } = await api.get(`/benefit/${id}`);
  return data;
};

const useFindBenefit = (id) => useQuery(['benefit', id], async () => getBenefit(id), {
    enabled: !!id,
  });


export default useFindBenefit;