/* eslint-disable unicorn/consistent-function-scoping */
import { useMutation } from '@tanstack/react-query'

import api from 'api/axios'

import type { ProvinceFormData } from '../../types'

const createProvince = async (provinceForm: ProvinceFormData) =>
	api.post('/province', provinceForm)

const useCreateProvince = () => {
	const onSuccess = () => {
		console.log('Se creo la provincia')
	}

	const onError = (error: Error) => {
		console.log('Error', error)
	}

	return useMutation(createProvince, {
		onSuccess,
		onError
	})
}

export default useCreateProvince
