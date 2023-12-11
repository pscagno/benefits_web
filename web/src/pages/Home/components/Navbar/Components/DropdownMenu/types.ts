import type { Dispatch, SetStateAction } from 'react'

export interface Subcategory {
	id: number
	name: string
}

export interface Category {
	id: number
	name: string
	orderInMenu: number
	imageHeader: string
	imageHeaderMobile: string
	imageMenu: string
	color: string
	subcategories: Subcategory[]
}

export interface Props {
	isOpen?: boolean | undefined
	setOpenMenu: Dispatch<SetStateAction<boolean>>
}
