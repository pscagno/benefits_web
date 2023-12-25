/* eslint-disable unicorn/consistent-function-scoping */
import { useMutation, useQueryClient } from '@tanstack/react-query';

import api from 'api/axios';
import { useMultipleNotificationContext } from 'context/MultipleNotificationContext';
import { SUB_CATEGORIES_KEY } from 'hooks/useGetSubCategories';
import useRedirect from 'hooks/useRedirect';

import type { SubcategoryFormData } from '../../types';

const createSubcategory = async (subcategoryForm: SubcategoryFormData) =>
    api.post('/subcategory', subcategoryForm);

const useCreateSubcategory = () => {
    const queryClient = useQueryClient();
    const { addNotification } = useMultipleNotificationContext();
    const redirectTo = useRedirect();

    const onSuccess = () => {
        queryClient.invalidateQueries([SUB_CATEGORIES_KEY]);
        addNotification({
            message: 'Subcategoría creada exitosamente',
            variant: 'success',
        });
        redirectTo('/subcategories');
    };

    const onError = (error: Error) => {
        addNotification({
            message: `Ocurrió un error al crear la subcategoría: ${error.message}`,
            variant: 'error',
        });
    };

    return useMutation(createSubcategory, {
        onSuccess,
        onError
    });
};

export default useCreateSubcategory;
