import { useMutation, useQueryClient } from '@tanstack/react-query';

import api from 'api/axios';
import { useMultipleNotificationContext } from 'context/MultipleNotificationContext';
import { BENEFIT_KEY } from 'hooks/useGetBenefits';
import useRedirect from 'hooks/useRedirect';

import type { BenefitFormData } from '../../types';

const editBenefit = async (benefitForm: BenefitFormData) => {
    const formData = new FormData();

    const benefitData = JSON.stringify({
        userCreation: benefitForm.userCreation,
        title: benefitForm.title,
        description: benefitForm.description,
        text: benefitForm.text,
        inHome: benefitForm.inHome,
        link: benefitForm.link,
        subcategory: benefitForm.subcategory,
    });

    formData.append('benefit', new Blob([benefitData], { type: 'application/json' }));

    if (benefitForm.imageHeader instanceof File) {
        formData.append('imageHeader', benefitForm.imageHeader, 'imageHeader.jpg');
    }
    if (benefitForm.imageHeaderMobile instanceof File) {
        formData.append('imageHeaderMobile', benefitForm.imageHeaderMobile, 'imageHeaderMobile.jpg');
    }
    if (benefitForm.imageLists instanceof File) {
        formData.append('imageLists', benefitForm.imageLists, 'imageLists.jpg');
    }
    if (benefitForm.imageDetails1 instanceof File) {
        formData.append('imageDetails1', benefitForm.imageDetails1, 'imageDetails1.jpg');
    }
    if (benefitForm.imageDetails2 instanceof File) {
        formData.append('imageDetails2', benefitForm.imageDetails2, 'imageDetails2.jpg');
    }

    return api.put(`/benefit/${benefitForm.id}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

const useEditBenefit = () => {
    const queryClient = useQueryClient();
    const { addNotification } = useMultipleNotificationContext();
    const redirectTo = useRedirect();

    const onSuccess = () => {
        queryClient.invalidateQueries([BENEFIT_KEY]);
        addNotification({
            message: 'Beneficio actualizado exitosamente',
            variant: 'success',
        });
        redirectTo('/benefits');
    };

    const onError = (error: Error) => {
        addNotification({
            message: `Ocurrió un error al actualizar el beneficio: ${error.message}`,
            variant: 'error',
        });
    };

    return useMutation(editBenefit, {
        onSuccess,
        onError,
    });
};

export default useEditBenefit;