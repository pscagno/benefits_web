import type { HTMLProps } from 'react'

import type { Preference } from 'types/preference'

export interface Props extends HTMLProps<HTMLInputElement> {
	gridCols: string
	title: string
	preferences: Preference[]
}
