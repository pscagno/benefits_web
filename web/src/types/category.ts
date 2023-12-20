import type { Subcategory } from './subcategory'

export interface Category {
	id: number
	name: string
	orderInMenu: number
	imageMenu: string
	imageHeader: string
	imageHeaderMobile: string
	color: string
	subcategories: Subcategory[]
}
