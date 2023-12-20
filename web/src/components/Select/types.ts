import type { HTMLProps } from 'react'

export interface Props
	extends React.DetailedHTMLProps<
		React.SelectHTMLAttributes<HTMLSelectElement>,
		HTMLSelectElement
	> {
	options: HTMLProps<HTMLOptionElement>[]
}
