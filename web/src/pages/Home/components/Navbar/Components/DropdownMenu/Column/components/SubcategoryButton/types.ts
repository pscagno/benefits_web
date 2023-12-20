import type { Dispatch, SetStateAction } from 'react'

import type { Category } from 'types/category'
import type { Subcategory } from 'types/subcategory'

export interface Props {
	subcategory: Subcategory
	setOpenMenu: Dispatch<SetStateAction<boolean>>
	category: Category
}
