/* eslint-disable unicorn/consistent-function-scoping */
import { useMutation, useQueryClient } from '@tanstack/react-query';

import api from 'api/axios';
import { useMultipleNotificationContext } from 'context/MultipleNotificationContext';
import { CAROUSEL_KEY } from 'hooks/useGetHomeCarousel';
import useRedirect from 'hooks/useRedirect';

import type { ImageFormData } from '../../types';

const createHomeCarousel = async (homeCarouselForm: ImageFormData) => {
    const formData = new FormData();

    if (homeCarouselForm.imageHeader)
        formData.append('imageHeader', homeCarouselForm.imageHeader, 'imageHeader.jpg');
    if (homeCarouselForm.imageHeaderMobile)
        formData.append('imageHeaderMobile', homeCarouselForm.imageHeaderMobile, 'imageHeaderMobile.jpg');

    return api.post('/homeCarrousel', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

const useCreateHomeCarousel = () => {
    const queryClient = useQueryClient();
    const { addNotification } = useMultipleNotificationContext();
    const redirectTo = useRedirect();

    const onSuccess = () => {
        queryClient.invalidateQueries([CAROUSEL_KEY]);
        addNotification({
            message: 'Imagen del carrusel creada exitosamente',
            variant: 'success',
        });
        redirectTo('/homecarousel');
    };

    const onError = (error: Error) => {
        addNotification({
            message: `Ocurrió un error al crear la imagen del carrusel: ${error.message}`,
            variant: 'error',
        });
    };

    return useMutation(createHomeCarousel, {
        onSuccess,
        onError
    });
};

export default useCreateHomeCarousel;