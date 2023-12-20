/* eslint-disable unicorn/consistent-function-scoping */
import { useMutation } from '@tanstack/react-query'

import api from 'api/axios'

import type { CategoryFormData } from '../../types'

const createCategory = async (categoryForm: CategoryFormData) => {
	const formData = new FormData()

	const categoryData = JSON.stringify({
		name: categoryForm.name,
		color: categoryForm.color,
		orderInMenu: categoryForm.orderInMenu
	})

	formData.append(
		'category',
		new Blob([categoryData], { type: 'application/json' })
	)

	if (categoryForm.imageHeader)
		formData.append('imageHeader', categoryForm.imageHeader, 'imageHeader.jpg')
	if (categoryForm.imageHeaderMobile)
		formData.append(
			'imageHeaderMobile',
			categoryForm.imageHeaderMobile,
			'imageHeaderMobile.jpg'
		)
	if (categoryForm.imageMenu)
		formData.append('imageMenu', categoryForm.imageMenu, 'imageMenu.jpg')

	return api.post('/category', formData, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	})
}

export const useCreateCategory = () => {
	const onSuccess = () => {
		console.log('Se creo la categoría')
	}

	const onError = (error: Error) => {
		console.log('Error', error)
	}

	return useMutation(createCategory, {
		onSuccess,
		onError
	})
}
