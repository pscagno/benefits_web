import type { Category } from 'types/category'
import type { Subcategory } from 'types/subcategory'

import api from './axios'

export interface FilterResponse {
	id: number
	logo?: 'health' | 'none'
	name: string
	color: string
	logoMobile?: string
	imageMenu?: string
	subcategories?: Subcategory[]
}

const getFilters = async () => api.get<Category[]>('/category')

export default getFilters
