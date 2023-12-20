import { useMutation, useQueryClient } from '@tanstack/react-query';

import api from 'api/axios';
import { PROVINCES_FETCH } from 'hooks/useGetProvinces';

const deleteProvince = async (id: number) => api.delete(`/province/${id}`);

const useDeleteProvince = () => {
  const queryClient = useQueryClient();

  const onSuccess = async () => {
    await queryClient.refetchQueries([PROVINCES_FETCH]);
  };

  return useMutation(deleteProvince, {
    onSuccess,
  });
};

export default useDeleteProvince;
