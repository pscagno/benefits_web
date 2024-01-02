import { useMutation, useQueryClient } from '@tanstack/react-query';

import api from 'api/axios';
import { useMultipleNotificationContext } from 'context/MultipleNotificationContext';
import { CATEGORIES_KEY } from 'hooks/useGetCategories';
import useRedirect from 'hooks/useRedirect';

import type { CategoryFormData } from '../../types';

const editCategory = async (categoryForm: CategoryFormData) => {
    const formData = new FormData();

    const categoryData = JSON.stringify({
        name: categoryForm.name,
        color: categoryForm.color,
        orderInMenu: categoryForm.orderInMenu,
    });

    formData.append('category', new Blob([categoryData], { type: 'application/json' }));

    // Append files only if they are File objects
    if (categoryForm.imageHeader instanceof File) {
        formData.append('imageHeader', categoryForm.imageHeader, 'imageHeader.jpg');
    }
    if (categoryForm.imageHeaderMobile instanceof File) {
        formData.append('imageHeaderMobile', categoryForm.imageHeaderMobile, 'imageHeaderMobile.jpg');
    }
    if (categoryForm.imageMenu instanceof File) {
        formData.append('imageMenu', categoryForm.imageMenu, 'imageMenu.jpg');
    }

    return api.put('/category', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};


const useEditCategory = () => {
    const queryClient = useQueryClient();
    const { addNotification } = useMultipleNotificationContext();
    const redirectTo = useRedirect();

    const onSuccess = () => {
        queryClient.invalidateQueries([CATEGORIES_KEY]);
        addNotification({
            message: 'Categoría actualizada exitosamente',
            variant: 'success',
        });
        redirectTo('/categories');
    };

    const onError = (error: Error) => {
        addNotification({
            message: `Ocurrió un error al actualizar la categoría: ${error.message}`,
            variant: 'error',
        });
    };

    return useMutation(editCategory, {
        onSuccess,
        onError,
    });
};

export default useEditCategory;
