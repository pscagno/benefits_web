import { useQuery } from '@tanstack/react-query'

import getImagesCarousel from 'api/getHomeImagesCarousel'

function useGetImagesCarousel() {
	const {
		isLoading,
		isError,
		error,
		data: imagesCarouselResponse
	} = useQuery(['imagesCarousel'], getImagesCarousel, {
		select: data => data.data
	})

	return {
		imagesCarouselIsLoading: isLoading,
		isError,
		error,
		imagesCarouselResponse
	}
}

export default useGetImagesCarousel
