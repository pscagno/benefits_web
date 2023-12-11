import type { HTMLProps } from 'react'

export interface Props extends HTMLProps<HTMLInputElement> {
	errorMessage?: string
}
