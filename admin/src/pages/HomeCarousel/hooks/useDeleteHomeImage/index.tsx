import { useMutation, useQueryClient } from '@tanstack/react-query';

import api from 'api/axios';
import { useMultipleNotificationContext } from 'context/MultipleNotificationContext';
import { CAROUSEL_KEY } from 'hooks/useGetHomeCarousel';
import useRedirect from 'hooks/useRedirect';

const deleteHomeImage = async (id: number) => api.delete(`/homeCarrousel/Image/${id}`);

const useDeleteHomeImage = () => {
    const queryClient = useQueryClient();
    const { addNotification } = useMultipleNotificationContext();
    const redirectTo = useRedirect();

    const onSuccess = async () => {
        await queryClient.refetchQueries([CAROUSEL_KEY]);
        addNotification({
            message: 'Imagen del carrusel eliminada exitosamente',
            variant: 'success',
        });
        redirectTo('/homecarousel');
    };

    const onError = (error: Error) => {
        addNotification({
            message: `Ocurrió un error al eliminar la imagen del carrusel: ${error.message}`,
            variant: 'error',
        });
    };

    return useMutation(deleteHomeImage, {
        onSuccess,
        onError
    });
};

export default useDeleteHomeImage;
