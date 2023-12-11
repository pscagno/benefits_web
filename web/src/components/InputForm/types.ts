import type { HTMLProps } from 'react'

export interface Props extends HTMLProps<HTMLInputElement> {
	icon?: React.ReactNode
	name: string
	errorMessage?: string
}
