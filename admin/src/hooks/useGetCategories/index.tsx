import { useQuery } from '@tanstack/react-query'

import api from 'api/axios'
import type { Category } from 'types/category'

const fetchCategories = async () => api.get<Category[]>('/category')

export const CATEGORIES_KEY = 'CATEGORIES'

export const useGetCategories = () =>
	useQuery([CATEGORIES_KEY], fetchCategories, {
		select: data => data.data
	})
