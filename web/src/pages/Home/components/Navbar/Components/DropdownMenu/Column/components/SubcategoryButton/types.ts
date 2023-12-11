import type { Dispatch, SetStateAction } from 'react'

import type { Subcategory } from '../../../types'

export interface Props {
	subcategory: Subcategory
	setOpenMenu: Dispatch<SetStateAction<boolean>>
}
