import { useMutation, useQueryClient } from '@tanstack/react-query';

import api from 'api/axios';
import { useMultipleNotificationContext } from 'context/MultipleNotificationContext';
import { SUB_CATEGORIES_KEY } from 'hooks/useGetSubCategories';
import useRedirect from 'hooks/useRedirect';

const deleteSubCategory = async (id: number) => api.delete(`/subcategory/${id}`);

const useDeleteSubCategory = () => {
    const queryClient = useQueryClient();
    const { addNotification } = useMultipleNotificationContext();
    const redirectTo = useRedirect();

    const onSuccess = async () => {
        await queryClient.refetchQueries([SUB_CATEGORIES_KEY]);
        addNotification({
            message: 'Subcategoría eliminada exitosamente',
            variant: 'success',
        });
        redirectTo('/subcategories');
    };

    const onError = (error: Error) => {
        addNotification({
            message: `Ocurrió un error al eliminar la subcategoría: ${error.message}`,
            variant: 'error',
        });
    };

    return useMutation(deleteSubCategory, {
        onSuccess,
        onError,
    });
};

export default useDeleteSubCategory;
