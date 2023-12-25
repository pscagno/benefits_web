import { useMutation, useQueryClient } from '@tanstack/react-query';

import api from 'api/axios';
import { useMultipleNotificationContext } from 'context/MultipleNotificationContext';
import { CITIES_FETCH } from 'hooks/useGetCities';
import useRedirect from 'hooks/useRedirect';

const deleteCity = async (id: number) => api.delete(`/city/${id}`);

const useDeleteCity = () => {
    const queryClient = useQueryClient();
    const { addNotification } = useMultipleNotificationContext();
    const redirectTo = useRedirect();

    const onSuccess = async () => {
        await queryClient.refetchQueries([CITIES_FETCH]);
        addNotification({
            message: 'Región eliminada exitosamente',
            variant: 'success',
        });
        redirectTo('/cities');
    };

    const onError = () => {
        addNotification({
            message: 'Ocurrió un error al eliminar la región',
            variant: 'error',
        });
    };

    return useMutation(deleteCity, {
        onSuccess,
        onError,
    });
};

export default useDeleteCity;
