import { useQuery } from '@tanstack/react-query'
import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import getImagesError from 'api/getImagesError'
import BannerImage from 'components/BannerImage'
import Button from 'components/Button'
import Filters from 'components/Filters'
import Loading from 'components/Loading/Loading'
import OurValues from 'components/OurValues'

function NotFound() {
	const { isLoading, error, data } = useQuery(['ImagesError'], getImagesError)
	const navigate = useNavigate()

	const handleRedirect = useCallback(() => {
		navigate(`/`)
	}, [navigate])

	if (isLoading) {
		return <Loading />
	}
	if (error) <p>No se pudieron cargar las imagenes...</p>

	return (
		<div className='mt-[81px] flex h-full w-full flex-col items-center bg-white'>
			<BannerImage
				altImage={data?.altImage}
				image={data?.image}
				imageMobile={data?.imageMobile}
			/>
			<div className='mb-[56px] mt-[62px] flex h-auto items-center justify-center'>
				<Button
					onClick={handleRedirect}
					text='IR A PÁGINA DE INICIO'
					type='button'
				/>
			</div>
			<Filters />
			<OurValues />
			<div className='w-50 min-h-[50px]'>FOOTER</div>
		</div>
	)
}

export default memo(NotFound)
