import ArrowLeftMobile from 'assets/ArrowSlider/ArrowLeftMobileSvg'
import ArrowLeftSvg from 'assets/ArrowSlider/ArrowLeftSvg'
import ArrowRightMobile from 'assets/ArrowSlider/ArrowRightMobile.Svg'
import ArrowRightSvg from 'assets/ArrowSlider/ArrowRightSvg'

import styles from './styles'
import type { Props } from './types'

function ArrowCarousel({ onClick, arrowDirection }: Props) {
	const arrowContainerStyles = {
		...styles.arrowButton,
		...(arrowDirection === 'left' ? styles.left : styles.right)
	}

	return (
		<button
			className={`${arrowDirection} `}
			onClick={onClick}
			style={arrowContainerStyles}
			type='button'
		>
			<div className='arrow-container-mobile'>
				{arrowDirection === 'left' ? (
					<ArrowLeftMobile color='#FFFFFF' />
				) : (
					<ArrowRightMobile color='#FFFFFF' />
				)}
			</div>
			<div className='arrow-container'>
				{arrowDirection === 'left' ? (
					<ArrowLeftSvg color='#D9D9D9' />
				) : (
					<ArrowRightSvg color='#D9D9D9' />
				)}
			</div>
		</button>
	)
}

export default ArrowCarousel
