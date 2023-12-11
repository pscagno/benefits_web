import { useQuery } from '@tanstack/react-query'

import getBannerImages from 'api/getBannersFavorites'
import getCards from 'api/getCards'
import BannerImage from 'components/BannerImage'
import BenefitsCards from 'components/CardsBenefits'
import Loading from 'components/Loading/Loading'
import OurValues from 'components/OurValues'

import ProfileForm from './components/ProfileForm'

function Profile() {
	const { data } = useQuery(['benefitsCards'], getCards)
	const {
		isLoading,
		error,
		data: dataBanners
	} = useQuery(['getBannersImages'], getBannerImages)

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
			<ProfileForm />
			<BenefitsCards
				bg='bg-[#FFFFFF]'
				data={data}
				header='Mis Favoritos'
				headerSize='base'
			/>
			<OurValues />
		</div>
	)
}

export default Profile
