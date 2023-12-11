import { memo } from 'react'

import ArrowLeftMobile from 'assets/ArrowSlider/ArrowLeftMobileSvg'
import ArrowLeft from 'assets/ArrowSlider/ArrowLeftSvg'
import ArrowRightMobile from 'assets/ArrowSlider/ArrowRightMobile.Svg'
import ArrowRight from 'assets/ArrowSlider/ArrowRightSvg'

import './styles.css'
import type { Props } from './types'

function ArrowComponents({ color, arrowDirection }: Props) {
	const isLeft = arrowDirection === 'left'

	return (
		<>
			<div className='arrow-container-mobile'>
				{isLeft ? <ArrowLeftMobile /> : <ArrowRightMobile />}
			</div>
			<div className='arrow-container'>
				{isLeft ? <ArrowLeft color={color} /> : <ArrowRight color={color} />}
			</div>
		</>
	)
}

export default memo(ArrowComponents)
