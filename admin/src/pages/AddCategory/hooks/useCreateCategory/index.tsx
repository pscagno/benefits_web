/* eslint-disable unicorn/consistent-function-scoping */
import { useMutation, useQueryClient } from '@tanstack/react-query';

import api from 'api/axios';
import { useMultipleNotificationContext } from 'context/MultipleNotificationContext';
import { CATEGORIES_KEY } from 'hooks/useGetCategories';
import useRedirect from 'hooks/useRedirect';

import type { CategoryFormData } from '../../types';

const createCategory = async (categoryForm: CategoryFormData) => {
    const formData = new FormData();

    const categoryData = JSON.stringify({
        name: categoryForm.name,
        color: categoryForm.color,
        orderInMenu: categoryForm.orderInMenu,
    });

    formData.append('category', new Blob([categoryData], { type: 'application/json' }));

    if (categoryForm.imageHeader)
        formData.append('imageHeader', categoryForm.imageHeader, 'imageHeader.jpg');
    if (categoryForm.imageHeaderMobile)
        formData.append('imageHeaderMobile', categoryForm.imageHeaderMobile, 'imageHeaderMobile.jpg');
    if (categoryForm.imageMenu)
        formData.append('imageMenu', categoryForm.imageMenu, 'imageMenu.jpg');

    return api.post('/category', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

const useCreateCategory = () => {
    const queryClient = useQueryClient();
    const { addNotification } = useMultipleNotificationContext();
    const redirectTo = useRedirect();

    const onSuccess = () => {
        queryClient.invalidateQueries([CATEGORIES_KEY]);
        addNotification({
            message: 'Categoría creada exitosamente',
            variant: 'success',
        });
        redirectTo('/categories');
    };

    const onError = (error: Error) => {
        addNotification({
            message: `Ocurrió un error al crear la categoría: ${error.message}`,
            variant: 'error',
        });
    };

    return useMutation(createCategory, {
        onSuccess,
        onError,
    });
};

export default useCreateCategory;