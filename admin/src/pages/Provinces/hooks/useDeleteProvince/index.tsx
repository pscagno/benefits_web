import { useMutation, useQueryClient } from '@tanstack/react-query';

import api from 'api/axios';
import { useMultipleNotificationContext } from 'context/MultipleNotificationContext';
import { PROVINCES_FETCH } from 'hooks/useGetProvinces';
import useRedirect from 'hooks/useRedirect';

const deleteProvince = async (id: number) => api.delete(`/province/${id}`);

const useDeleteProvince = () => {
    const queryClient = useQueryClient();
    const { addNotification } = useMultipleNotificationContext();
    const redirectTo = useRedirect();

    const onSuccess = async () => {
        await queryClient.refetchQueries([PROVINCES_FETCH]);
        addNotification({
            message: 'Provincia eliminada exitosamente',
            variant: 'success',
        });
        redirectTo('/provinces');
    };

    const onError = (error: Error) => {
        addNotification({
            message: `Ocurrió un error al eliminar la provincia: ${error.message}`,
            variant: 'error',
        });
    };

    return useMutation(deleteProvince, {
        onSuccess,
        onError,
    });
};

export default useDeleteProvince;
