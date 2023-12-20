import { useMutation, useQueryClient } from '@tanstack/react-query';

import api from 'api/axios';
import { CATEGORIES_KEY } from 'hooks/useGetCategories';

const deleteCategory = async (id: number) => api.delete(`/category/${id}`);

const useDeleteCategory = () => {
  const queryClient = useQueryClient();

  const onSuccess = async () => {
    await queryClient.refetchQueries([CATEGORIES_KEY]);
  };

  return useMutation(deleteCategory, {
    onSuccess,
  });
};

export default useDeleteCategory;
