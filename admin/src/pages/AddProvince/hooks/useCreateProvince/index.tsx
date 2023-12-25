/* eslint-disable unicorn/consistent-function-scoping */
import { useMutation, useQueryClient } from '@tanstack/react-query';

import api from 'api/axios';
import { useMultipleNotificationContext } from 'context/MultipleNotificationContext';
import { PROVINCES_FETCH } from 'hooks/useGetProvinces';
import useRedirect from 'hooks/useRedirect';

import type { ProvinceFormData } from '../../types';

const createProvince = async (provinceForm: ProvinceFormData) =>
	api.post('/province', provinceForm)

const useCreateProvince = () => {
		const queryClient = useQueryClient();
		const { addNotification } = useMultipleNotificationContext()
		const redirectTo = useRedirect();

		const onSuccess = async () => {
      await queryClient.refetchQueries([PROVINCES_FETCH]);
			addNotification({
				message: 'Provincia creada exitosamente',
				variant: 'success',
			})
			redirectTo('/provinces');
		}

		const onError = () => {
			addNotification({
				message: 'Ocurrió un error al crear la provincia',
				variant: 'error',
			})
		}

		return useMutation(createProvince, {
			onSuccess,
			onError
		})
}

export default useCreateProvince
