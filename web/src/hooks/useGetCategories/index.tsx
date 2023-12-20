import { useQuery } from '@tanstack/react-query'

import api from 'api/axios'

export interface Categories {
	id: number
	name: string
	orderInMenu: number
	color: string
	imageMenu: string
	subcategories?: [
		{
			id: number
			name: string
		}
	]
}

const fetchCategories = async () => api.get<Categories[]>('/category')

export const CATEGORIES_KEY = 'CATEGORIES'

export const useGetCategories = () =>
	useQuery([CATEGORIES_KEY], fetchCategories, {
		select: data => data.data
	})
