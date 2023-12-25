/* eslint-disable unicorn/consistent-function-scoping */
import { useMutation, useQueryClient } from '@tanstack/react-query';

import api from 'api/axios';
import { useMultipleNotificationContext } from 'context/MultipleNotificationContext';
import { CITIES_FETCH } from 'hooks/useGetCities';
import useRedirect from 'hooks/useRedirect';

import type { CityFormData } from '../../types';

const createCity = async (cityForm: CityFormData) => api.post('/city', cityForm);

const useCreateCity = () => {
	  const queryClient = useQueryClient();
    const { addNotification } = useMultipleNotificationContext();
    const redirectTo = useRedirect();

    const onSuccess = async () => {
        await queryClient.refetchQueries([CITIES_FETCH]);
        addNotification({
            message: 'Región creada exitosamente',
            variant: 'success',
        });
        redirectTo('/cities');
    };

    const onError = () => {
        addNotification({
            message: 'Ocurrió un error al crear la región',
            variant: 'error',
        });
    };

    return useMutation(createCity, {
        onSuccess,
        onError,
    });
};

export default useCreateCity;
