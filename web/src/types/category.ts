import type { Subcategory } from './subcategory'

export interface Category {
	id: number
	name: string
	orderInMenu: number
	// logo:
	imageHeader: string
	// logoMobile:
	imageHeaderMobile: string
	color: string
	subcategories: Subcategory[]
}
