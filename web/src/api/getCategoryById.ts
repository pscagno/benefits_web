import type { Category } from 'types/category'

import api from './axios'

export default async function getCategoryById(id: number) {
	const response = await api.get<Category>(`/category/${id}`)
	return response.data
}
