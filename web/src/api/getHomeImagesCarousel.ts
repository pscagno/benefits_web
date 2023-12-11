/* eslint-disable @typescript-eslint/no-magic-numbers */
// import ImagesCarouselHome from 'pages/Home/components/HeaderCarousel/mock'

import api from './axios'

interface ImagesCarouselHome {
	id: number
	imageHeader: string
	imageHeaderMobile: string
}

export default async function getImagesCarousel() {
	try {
		const response = await api.get<ImagesCarouselHome[]>('/homeCarrousel')
		return response.data
	} catch (error) {
		return error
	}
}
