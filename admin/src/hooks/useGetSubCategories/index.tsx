import { useQuery } from '@tanstack/react-query'

import api from 'api/axios'
import type { SubCategory } from 'types/subcategory'

const fetchSubCategories = async () => api.get<SubCategory[]>('/subcategory')

export const SUB_CATEGORIES_KEY = 'SUB_CATEGORIES'

export const useGetSubCategories = () =>
	useQuery([SUB_CATEGORIES_KEY], fetchSubCategories, {
		select: data => data.data
	})
