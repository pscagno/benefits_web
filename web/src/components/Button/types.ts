import type { ReactNode, ButtonHTMLAttributes } from 'react'

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	buttonColor?: string
	icon?: ReactNode
	testid?: string
	text?: string
	textSize?: string
	paddingY?: string
	width?: string
}
