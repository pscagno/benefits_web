import type { Props } from './types'

function Arrow({ styleArrow }: Props) {
	return (
		<svg
			className={styleArrow}
			fill='none'
			height='38'
			viewBox='0 0 27 49'
			width='38'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g id='Group 6'>
				<rect
					fill='#FFFFFF'
					height='3.97747'
					id='Rectangle 33'
					rx='1.98874'
					transform='rotate(135 27 24.2909)'
					width='34.2063'
					x='27'
					y='24.2909'
				/>
				<rect
					fill='#FFFFFF'
					height='3.97747'
					id='Rectangle 34'
					rx='1.98874'
					transform='rotate(-135 24.1875 27)'
					width='34.2063'
					x='24.1875'
					y='27'
				/>
			</g>
		</svg>
	)
}

export default Arrow
