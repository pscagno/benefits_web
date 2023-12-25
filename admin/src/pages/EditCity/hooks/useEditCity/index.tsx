import { useMutation, useQueryClient } from '@tanstack/react-query';

import api from 'api/axios';
import { useMultipleNotificationContext } from 'context/MultipleNotificationContext';
import { CITIES_FETCH } from 'hooks/useGetCities';
import useRedirect from 'hooks/useRedirect';

import type { CityFormData } from '../../types';

const editCity = async (cityForm: CityFormData) => api.put(`/city/${cityForm.id}`, cityForm);

const useEditCity = () => {
  const queryClient = useQueryClient();
  const { addNotification } = useMultipleNotificationContext();
  const redirectTo = useRedirect();

  const onSuccess = async () => {
    await queryClient.refetchQueries([CITIES_FETCH]);
    addNotification({
      message: 'Región actualizada exitosamente',
      variant: 'success',
    });
    redirectTo('/cities');
  };

  const onError = (error: Error) => {
    addNotification({
      message: `Ocurrió un error al actualizar la región: ${error.message}`,
      variant: 'error',
    });
  };

  return useMutation(editCity, {
    onSuccess,
    onError,
  });
};

export default useEditCity;
