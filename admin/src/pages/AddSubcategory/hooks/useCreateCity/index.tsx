/* eslint-disable unicorn/consistent-function-scoping */
import { useMutation } from '@tanstack/react-query'

import api from 'api/axios'

import type { SubcategoryFormData } from '../../types'

const createSubcategory = async (subcategoryForm: SubcategoryFormData) =>
	api.post('/subcategory', subcategoryForm)

const useCreateSubcategory = () => {
	const onSuccess = () => {
		console.log('Se creo la subcategoría')
	}

	const onError = (error: Error) => {
		console.log('Error', error)
	}

	return useMutation(createSubcategory, {
		onSuccess,
		onError
	})
}

export default useCreateSubcategory
