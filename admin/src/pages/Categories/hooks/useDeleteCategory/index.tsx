import { useMutation, useQueryClient } from '@tanstack/react-query';

import api from 'api/axios';
import { useMultipleNotificationContext } from 'context/MultipleNotificationContext';
import { CATEGORIES_KEY } from 'hooks/useGetCategories';
import useRedirect from 'hooks/useRedirect';

const deleteCategory = async (id: number) => api.delete(`/category/${id}`);

const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  const { addNotification } = useMultipleNotificationContext();
  const redirectTo = useRedirect();

  const onSuccess = async () => {
    await queryClient.refetchQueries([CATEGORIES_KEY]);
    addNotification({
      message: 'Categoría eliminada exitosamente',
      variant: 'success',
    });
    redirectTo('/categories');
  };

  const onError = () => {
    addNotification({
      message: 'Ocurrió un error al eliminar la categoría',
      variant: 'error',
    });
  };

  return useMutation(deleteCategory, {
    onSuccess,
    onError,
  });
};

export default useDeleteCategory;
