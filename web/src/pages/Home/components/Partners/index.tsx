import { memo } from 'react'
import Carousel from 'react-multi-carousel'

import ArrowPartners from 'components/ArrowButton'

import imagesPartner from './mock'
import responsive from './utils'

function Partners() {
	return (
		<div className='bg-grey-700 relative mt-8 flex flex-col items-center justify-center px-4'>
			<h2 className='text-center font-TitilliumWeb text-[32px] font-semibold leading-normal text-primary-description sm:text-xl'>
				Partners
			</h2>

			<Carousel
				centerMode={false}
				className='mb-8 flex h-[160px] w-full max-w-[1334px] flex-row'
				containerClass='carousel-container'
				customLeftArrow={
					<ArrowPartners arrowDirection='left' color='#D9D9D9' />
				}
				customRightArrow={
					<ArrowPartners arrowDirection='right' color='#D9D9D9' />
				}
				focusOnSelect={false}
				renderArrowsWhenDisabled={false}
				responsive={responsive}
				rewind={false}
				rewindWithAnimation={false}
				showDots={false}
				slidesToSlide={1}
				autoPlay
				draggable
				infinite
				keyBoardControl
				pauseOnHover
				shouldResetAutoplay
				swipeable
			>
				{imagesPartner.map(card => (
					<img
						alt={card.altImage}
						className='m-auto block h-[106] w-[198px]'
						key={card.id}
						src={card.image}
					/>
				))}
			</Carousel>
		</div>
	)
}

export default memo(Partners)
