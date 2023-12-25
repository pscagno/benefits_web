import { useMutation, useQueryClient } from '@tanstack/react-query';

import api from 'api/axios';
import { useMultipleNotificationContext } from 'context/MultipleNotificationContext';
import { PROVINCES_FETCH } from 'hooks/useGetProvinces';
import useRedirect from 'hooks/useRedirect';

import type { ProvinceFormData } from '../../types';

const editProvince = async (provinceForm: ProvinceFormData) =>
  api.put(`/province/${provinceForm.id}`, provinceForm);

const useEditProvince = () => {
  const queryClient = useQueryClient();
  const { addNotification } = useMultipleNotificationContext();
  const redirectTo = useRedirect();

  const onSuccess = async () => {
    await queryClient.refetchQueries([PROVINCES_FETCH]);
    addNotification({
      message: 'Provincia actualizada exitosamente',
      variant: 'success',
    });
    redirectTo('/provinces');
  };

  const onError = () => {
    addNotification({
      message: 'Ocurrió un error al actualizar la provincia',
      variant: 'error',
    });
  };

  return useMutation(editProvince, {
    onSuccess,
    onError,
  });
};

export default useEditProvince;
