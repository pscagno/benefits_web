import { useMutation, useQueryClient } from '@tanstack/react-query';

import api from 'api/axios';
import { useMultipleNotificationContext } from 'context/MultipleNotificationContext';
import { BENEFIT_KEY } from 'hooks/useGetBenefits';
import useRedirect from 'hooks/useRedirect';

const deleteBenefit = async (id: number) => api.delete(`/benefit/${id}`);

const useDeleteBenefit = () => {
  const queryClient = useQueryClient();
  const { addNotification } = useMultipleNotificationContext();
  const redirectTo = useRedirect();

  const onSuccess = async () => {
    await queryClient.refetchQueries([BENEFIT_KEY]);
    addNotification({
      message: 'Beneficio eliminado exitosamente',
      variant: 'success',
    });
    redirectTo('/benefits');
  };

  const onError = (error: Error) => {
    addNotification({
      message: `Ocurrió un error al eliminar el beneficio: ${error.message}`,
      variant: 'error',
    });
  };

  return useMutation(deleteBenefit, {
    onSuccess,
    onError,
  });
};

export default useDeleteBenefit;
