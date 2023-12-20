import { useQuery } from '@tanstack/react-query'
import { memo } from 'react'

import getBannerImages from 'api/getBannersFavorites'
import getCardsFavorites from 'api/getBenefitsFavorites'
import getCards from 'api/getCards'
import BannerImage from 'components/BannerImage'
import BenefitsCards from 'components/CardsBenefits'
import Loading from 'components/Loading/Loading'

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
				getBenefits={getCardsFavorites}
				header='Mis Favoritos'
				headerSize='large'
				keyQueryName='benefitsFav'
			/>
		</div>
	)
}

export default memo(Favorites)
