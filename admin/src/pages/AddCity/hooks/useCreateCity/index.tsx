/* eslint-disable unicorn/consistent-function-scoping */
import { useMutation } from '@tanstack/react-query'

import api from 'api/axios'

import type { CityFormData } from '../../types'

const createCity = async (cityForm: CityFormData) => api.post('/city', cityForm)

const useCreateCity = () => {
	const onSuccess = () => {
		console.log('Se creo la ciudad')
	}

	const onError = (error: Error) => {
		console.log('Error', error)
	}

	return useMutation(createCity, {
		onSuccess,
		onError
	})
}

export default useCreateCity
