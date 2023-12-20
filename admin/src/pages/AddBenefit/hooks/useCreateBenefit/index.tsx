import { useMutation } from '@tanstack/react-query'

import api from 'api/axios'

import type { BenefitFormData } from '../../types'

const createBenefit = async (benefitForm: BenefitFormData) => {
	const formData = new FormData()

	// Serializar los datos del beneficio como JSON y agregarlos a formData
	const benefitData = JSON.stringify({
		userCreation: benefitForm.userCreation,
		title: benefitForm.title,
		description: benefitForm.description,
		text: benefitForm.text,
		inHome: benefitForm.inHome, // Ya no necesitas convertir a string, mantén el tipo original
		link: benefitForm.link,
		subcategory: benefitForm.subcategory // Esto es correcto, siempre que el backend espere un objeto con una propiedad 'id'
	})

	formData.append(
		'benefit',
		new Blob([benefitData], { type: 'application/json' })
	)

	if (benefitForm.imageHeader)
		formData.append('imageHeader', benefitForm.imageHeader, 'imageHeader.jpg')
	if (benefitForm.imageHeaderMobile)
		formData.append(
			'imageHeaderMobile',
			benefitForm.imageHeaderMobile,
			'imageHeaderMobile.jpg'
		)
	if (benefitForm.imageLists)
		formData.append('imageLists', benefitForm.imageLists, 'imageLists.jpg')
	if (benefitForm.imageDetails1)
		formData.append(
			'imageDetails1',
			benefitForm.imageDetails1,
			'imageDetails1.jpg'
		)
	if (benefitForm.imageDetails2)
		formData.append(
			'imageDetails2',
			benefitForm.imageDetails2,
			'imageDetails2.jpg'
		)

	return api.post('/benefit', formData, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	})
}

export const useCreateBenefit = () => {
	const onSuccess = () => {
		console.log('Se creo el beneficio')
	}

	const onError = error => {
		console.log('Error', error)
	}

	return useMutation(createBenefit, {
		onSuccess,
		onError
	})
}
