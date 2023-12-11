import Carousel from 'react-multi-carousel'

import './styles.css'

import ArrowCarousel from './components/ArrowCarousel'
import Dot from './components/Dot'
import type { Props } from './types'

function CarouselComponent({
	children,
	arrows,
	autoPlay = true,
	draggable = true,
	infinite = true,
	keyBoardControl = true,
	pauseOnHover = true,
	shouldResetAutoplay = true,
	showDots = true,
	swipeable = true,
	responsive,
	customClassContainer = ''
}: Props) {
	return (
		<Carousel
			arrows={arrows}
			autoPlay={autoPlay}
			autoPlaySpeed={3000}
			centerMode={false}
			containerClass={`carousel-container ${customClassContainer}`}
			customDot={<Dot />}
			customLeftArrow={<ArrowCarousel arrowDirection='left' />}
			customRightArrow={<ArrowCarousel arrowDirection='right' />}
			dotListClass='carousel-dot-list'
			draggable={draggable}
			focusOnSelect={false}
			infinite={infinite}
			keyBoardControl={keyBoardControl}
			pauseOnHover={pauseOnHover}
			responsive={responsive}
			rewind={false}
			rewindWithAnimation={false}
			shouldResetAutoplay={shouldResetAutoplay}
			showDots={showDots}
			slidesToSlide={1}
			swipeable={swipeable}
		>
			{children}
		</Carousel>
	)
}

export default CarouselComponent
