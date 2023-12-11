import { memo } from 'react'

import ArrowButton from 'components/ArrowButton'

import type { Props } from './types'

function ButtonGroup({ next, previous, carouselState }: Props) {
	const currentSlide = carouselState?.currentSlide

	return (
		<div className='absolute flex h-[250px] w-[100%] min-w-[1485] max-w-[1498px] flex-col items-center justify-center sm:max-w-[420px] md:w-[100%] md:min-w-[739px] md:max-w-[740px] lg:w-[100%] lg:min-w-[999px] lg:max-w-[950px] xl:w-[100%] xl:max-w-[1400px] lp:w-[100%] lp:max-w-[1180px]'>
			<div className='h-[100px] w-full'>
				<p className='text-center text-2xl font-bold text-gray-800' />
			</div>
			<div className='item flex h-[50px] w-full flex-row justify-center sm:h-[10px] sm:pl-[2%] xl:max-w-[1489px] '>
				<ArrowButton
					arrowDirection='left'
					color='#D9D9D9'
					nameClass={currentSlide === 0 ? 'disable' : ''}
					onClick={previous}
				/>
				<ArrowButton arrowDirection='right' color='#D9D9D9' onClick={next} />
			</div>
		</div>
	)
}

export default memo(ButtonGroup)
