import type { HTMLProps } from 'react'

export interface Option {
	value: string
	label: string
}

export interface Props extends HTMLProps<HTMLInputElement> {
	name: string
	options: Option[]
}
