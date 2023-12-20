import { memo } from 'react'

interface Props {
	index: number
	rating: number
}

function RatingStarIcon({ index, rating }: Props) {
	return (
		<svg
			fill='none'
			height='32'
			viewBox='0 0 34 32'
			width='34'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M8.22129 30.886C7.44929 31.282 6.57329 30.588 6.72929 29.702L8.38929 20.2424L1.34331 13.5306C0.685308 12.9026 1.02731 11.7546 1.9093 11.6306L11.7053 10.2387L16.0733 1.58498C16.4673 0.805006 17.5333 0.805006 17.9273 1.58498L22.2952 10.2387L32.0912 11.6306C32.9732 11.7546 33.3152 12.9026 32.6552 13.5306L25.6112 20.2424L27.2712 29.702C27.4272 30.588 26.5512 31.282 25.7792 30.886L16.9973 26.3742L8.22129 30.886Z'
				fill={index <= rating ? '#FFC629' : 'transparent'}
				stroke={index <= rating ? '#FFC629' : '#949599'}
			/>
		</svg>
	)
}

export default memo(RatingStarIcon)
