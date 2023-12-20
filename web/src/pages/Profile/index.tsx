import { useQuery } from '@tanstack/react-query'

import getBannerImages from 'api/getBannersFavorites'
import getCardsFavorites from 'api/getBenefitsFavorites'
import getCards from 'api/getCards'
import BannerImage from 'components/BannerImage'
import BenefitsCards from 'components/CardsBenefits'
import { useGetCategories } from 'hooks/useGetCategories'
import { useGetCities } from 'hooks/useGetCities/useGetCities'
import { useGetProvinces } from 'hooks/useGetProvinces/useGetProvinces'
import { useGetUserProfile } from 'hooks/useUserProfile'

import ProfileForm from './components/ProfileForm'

function Profile() {
	const { data, isSuccess: dataSuccess } = useQuery(['benefitsCards'], getCards)
	const { data: dataBanners } = useQuery(['getBannersImages'], getBannerImages) // TODO: Esta imagen la tenemos de forma local, no de la API

	const {
		data: cities,
		error: citiesError,
		isLoading: citiesLoading,
		isSuccess: citiesSuccess
	} = useGetCities()

	const {
		data: provinces,
		error: provincesError,
		isLoading: provincesLoading,
		isSuccess: provincesSuccess
	} = useGetProvinces()

	const {
		data: categories,
		error: categoriesError,
		isLoading: categoriesLoading,
		isSuccess: categoriesSuccess
	} = useGetCategories()

	const {
		data: userProfileData,
		error: userProfileError,
		isLoading: userProfileLoading,
		isSuccess: userProfileSuccess
	} = useGetUserProfile()

	if (
		citiesLoading ||
		provincesLoading ||
		userProfileLoading ||
		categoriesLoading
	) {
		return <div>Loading...</div>
	}

	if (citiesError || provincesError || userProfileError || categoriesError) {
		return <div>Error</div>
	}

	if (
		citiesSuccess &&
		provincesSuccess &&
		userProfileSuccess &&
		categoriesSuccess &&
		dataSuccess
	) {
		return (
			<div className='mt-[81px] flex h-full w-full flex-col items-center bg-white'>
				<BannerImage
					altImage={dataBanners?.altImage}
					image={dataBanners?.image}
					imageMobile={dataBanners?.imageMobile}
				/>
				<ProfileForm
					categories={categories}
					cities={cities}
					provinces={provinces}
					userProfile={userProfileData}
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
}

export default Profile
