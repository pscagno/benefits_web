import { useMutation, useQueryClient } from '@tanstack/react-query';

import api from 'api/axios';
import { BENEFIT_KEY } from 'hooks/useGetBenefits';

const deleteBenefit = async (id: number) => api.delete(`/benefit/${id}`);

const useDeleteBenefit = () => {
  const queryClient = useQueryClient();

  const onSuccess = async () => {
    await queryClient.refetchQueries([BENEFIT_KEY]);
  };

  return useMutation(deleteBenefit, {
    onSuccess,
  });
};

export default useDeleteBenefit;
