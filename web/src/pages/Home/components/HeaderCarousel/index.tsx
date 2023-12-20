import Carousel from 'react-multi-carousel'

import 'react-multi-carousel/lib/styles.css'

import useMediaQuery from 'Utils/mediaQuery'
import Arrow from 'components/Carousel/components/Arrow'
import Dot from 'components/Carousel/components/Dot'
import Loading from 'components/Loading/Loading'

import image_carrusel from '../../../../assets/images/Banners-Nueva-Home.png'
import useGetImagesCarousel from './hooks/useGetImagesCarousel'
import responsive from './utils'

const img_default = [
	{
		id: 1,
		imageHeader: image_carrusel,
		imageHeaderMobile: image_carrusel,
	}
]

function HeaderCarousel() {
	const { imagesCarouselIsLoading, error, imagesCarouselResponse } =
		useGetImagesCarousel()

	const mobile = useMediaQuery({ query: '(max-width: 768px)' })

	if (imagesCarouselIsLoading) {
		return (
			<div className='flex justify-center'>
				<Loading />
			</div>
		)
	}
	if (error) <p>No se pudieron cargar las cards...</p>

	return (
		<div className='h-[600px] w-full sm:h-[480px]'>
			<Carousel
				autoPlaySpeed={3000}
				centerMode={false}
				containerClass='carousel-container'
				customDot={<Dot />}
				customLeftArrow={<Arrow arrowDirection='left' />}
				customRightArrow={<Arrow arrowDirection='right' />}
				dotListClass='carousel-dot-list'
				focusOnSelect={false}
				responsive={responsive}
				rewind={false}
				rewindWithAnimation={false}
				slidesToSlide={1}
				arrows
				autoPlay
				draggable
				infinite
				keyBoardControl
				pauseOnHover
				shouldResetAutoplay
				showDots
				swipeable
			>
				{imagesCarouselResponse?.length
					? imagesCarouselResponse.map(image => (
							<div className='h-[600px] w-full sm:h-[440px]' key={image.id}>
								<img
									alt={image.id.toString()}
									className='relative h-[500px] w-full bg-no-repeat object-cover sm:h-[408px]'
									src={`data:image/png;base64,${
										mobile ? image.imageHeaderMobile : image.imageHeader
									}`}
								/>
							</div>
					  ))
					: img_default.map(image => (
							<div className='h-[600px] w-full sm:h-[440px]' key={image.id}>
								<img
									alt={image.id.toString()}
									className='relative h-[500px] w-full bg-no-repeat object-cover sm:h-[408px]'
									src={`${
										mobile ? image.imageHeaderMobile : image.imageHeader
									}`}
								/>
							</div>
					  ))}
			</Carousel>
		</div>
	)
}

export default HeaderCarousel
