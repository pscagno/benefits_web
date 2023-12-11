export interface ArrowStyles {
	position: 'absolute'
	right?: string
	left?: string
	top: string
	color: string
	fontSize: string
	cursor: 'pointer'
}

export interface Props {
	onClick?: () => void
	arrowDirection: 'left' | 'right'
	customClassname?: string
}
