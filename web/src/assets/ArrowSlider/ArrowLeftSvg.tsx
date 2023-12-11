import { memo } from 'react'

import type { Props } from './types'

function ArrowLeftSvg({ color = '#FFFFFF' }: Props) {
	return (
		<svg
			fill='none'
			height='49'
			viewBox='0 0 27 49'
			width='27'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g id='Group 5'>
				<rect
					fill={color}
					height='3.97747'
					id='Rectangle 33'
					rx='1.98874'
					transform='rotate(-45 0 24.1875)'
					width='34.2063'
					y='24.1875'
				/>
				<rect
					fill={color}
					height='3.97747'
					id='Rectangle 34'
					rx='1.98874'
					transform='rotate(45 2.8125 21.4784)'
					width='34.2063'
					x='2.8125'
					y='21.4784'
				/>
			</g>
		</svg>
	)
}

export default memo(ArrowLeftSvg)
