import { useQuery } from '@tanstack/react-query'
import { memo } from 'react'

import getBannerImages from 'api/getBannersFavorites'
import getCards from 'api/getCards'
import BannerImage from 'components/BannerImage'
import BenefitsCards from 'components/CardsBenefits'
import Loading from 'components/Loading/Loading'
import OurValues from 'components/OurValues'

function Favorites() {
	const { data } = useQuery(['benefitsCards'], getCards)
	const {
		isLoading,
		error,
		data: dataBanners
	} = useQuery(['benefitsBanners'], getBannerImages)

	if (data === undefined) {
		return <Loading />
	}

	if (isLoading) {
		return <Loading />
	}
	if (error) <p>No se pudieron cargar las imagenes...</p>

	return (
		<div className='mt-[81px] flex h-full w-full flex-col items-center bg-white'>
			<BannerImage
				altImage={dataBanners?.altImage}
				image={dataBanners?.image}
				imageMobile={dataBanners?.imageMobile}
			/>
			<BenefitsCards
				bg='bg-[#00000]'
				data={data}
				header='Mis Favoritos'
				headerSize='large'
			/>
			<OurValues />
		</div>
	)
}

export default memo(Favorites)
