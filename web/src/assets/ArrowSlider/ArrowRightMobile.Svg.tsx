import type { Props } from './types'

function ArrowRightMobile({ color = '#D9D9D9' }: Props) {
	return (
		<svg
			fill='none'
			height='24'
			viewBox='0 0 51 24'
			width='51'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g id='Group 6'>
				<rect
					fill={color}
					height='1.92631'
					id='Rectangle 33_2'
					rx='0.963157'
					transform='rotate(135 50.0763 11.7642)'
					width='16.5663'
					x='50.0763'
					y='11.7642'
				/>
				<rect
					fill={color}
					height='1.92631'
					id='Rectangle 34_2'
					rx='0.963157'
					transform='rotate(-135 48.7142 13.0762)'
					width='16.5663'
					x='48.7142'
					y='13.0762'
				/>
			</g>
		</svg>
	)
}

export default ArrowRightMobile
