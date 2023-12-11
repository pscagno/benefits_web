import { useQuery } from '@tanstack/react-query'

import getSliderImage from 'api/getSliderMid'

function SliderMid() {
	const { isLoading, error, data } = useQuery(['SliderMid'], getSliderImage)

	if (isLoading) <p>Loading...</p>
	if (error) <p>No se pudieron cargar las cards...</p>

	return (
		<div className='h-[672px] w-full'>
			{data?.map(image => (
				<img
					alt='imageSliderMacro'
					className='relative h-[672px] w-full bg-no-repeat object-cover'
					key={image.id}
					src={image.image}
				/>
			))}
		</div>
	)
}

export default SliderMid
