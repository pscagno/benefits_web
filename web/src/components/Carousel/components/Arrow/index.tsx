import ArrowLeftMobile from 'assets/ArrowSlider/ArrowLeftMobileSvg'
import ArrowLeftSvg from 'assets/ArrowSlider/ArrowLeftSvg'
import ArrowRightMobile from 'assets/ArrowSlider/ArrowRightMobile.Svg'
import ArrowRightSvg from 'assets/ArrowSlider/ArrowRightSvg'
import useMediaQuery from 'Utils/mediaQuery'

import styles from './styles'
import type { Props } from './types'

function Arrow({ onClick, arrowDirection, customClassname }: Props) {
	const mobile = useMediaQuery({ query: '(max-width: 768px)' })
	const arrowContainerStyles = {
		...styles.arrowButton,
		...(arrowDirection === 'left' ? styles.left : styles.right)
	}
	const arrowContainerStylesMobile = {
		...styles.arrowButtonMobile,
		...(arrowDirection === 'left' ? styles.left : styles.right)
	}

	return (
		<button
			className={`${customClassname}-${arrowDirection}`}
			onClick={onClick}
			style={mobile ? arrowContainerStylesMobile : arrowContainerStyles}
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

export default Arrow
