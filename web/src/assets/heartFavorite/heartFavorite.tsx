import type { Props } from './types'

function HeartFavorite({ isSelected }: Props) {
	return (
		<div>
			<svg
				fill='none'
				height='29'
				viewBox='0 0 30 29'
				width='30'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g id='Heart Icon Fill'>
					<path
						clipRule='evenodd'
						d='M14.9996 2.46385C23.3208 -6.0899 44.1258 8.87822 14.9996 28.1251C-14.1267 8.8801 6.67834 -6.0899 14.9996 2.46385Z'
						fill={isSelected ? '#FF4351' : '#E5E5E5'}
						fillRule='evenodd'
						id='Vector'
					/>
				</g>
			</svg>
		</div>
	)
}

export default HeartFavorite
