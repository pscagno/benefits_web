import type { Props } from './types'

function ArrowLeftMobile({ color = '#D9D9D9' }: Props) {
	return (
		<svg
			fill='none'
			height='24'
			viewBox='0 0 51 24'
			width='51'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g id='Group 5'>
				<rect
					fill={color}
					height='1.92631'
					id='Rectangle 333'
					rx='0.963157'
					transform='rotate(-45 3.8147e-06 11.7141)'
					width='16.5663'
					x='3.8147e-06'
					y='11.7141'
				/>
				<rect
					fill={color}
					height='1.92631'
					id='Rectangle 334'
					rx='0.963157'
					transform='rotate(45 1.36211 10.4021)'
					width='16.5663'
					x='1.36211'
					y='10.4021'
				/>
			</g>
		</svg>
	)
}

export default ArrowLeftMobile
