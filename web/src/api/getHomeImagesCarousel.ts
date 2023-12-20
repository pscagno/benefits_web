import api from './axios'

interface ImagesCarouselHome {
	id: number
	imageHeader: string
	imageHeaderMobile: string
}

const getImagesCarousel = async () =>
	api.get<ImagesCarouselHome[]>('/homeCarrousel')

export default getImagesCarousel
