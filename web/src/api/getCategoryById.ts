/* eslint-disable no-console */
import type { QueryFunctionContext } from '@tanstack/react-query'

import type { Category } from 'types/category'

import api from './axios'

const NUMBER = 1

export default async function getCategoryById({
	queryKey
}: QueryFunctionContext<(number | string)[]>): Promise<Category | never[]> {
	const id = queryKey[NUMBER]
	try {
		const response = await api.get<Category>(`/category/${id}`)
		return response.data
	} catch (error) {
		console.error('Error fetching categories:', error)
		return []
	}
}
