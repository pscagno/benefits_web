import type { Dispatch, SetStateAction } from 'react'

import type { Category } from 'types/category'

export interface Props {
	category: Category
	setOpenMenu: Dispatch<SetStateAction<boolean>>
	setCategoryExpanded: Dispatch<SetStateAction<number>>
	categoryExpanded: number
}
