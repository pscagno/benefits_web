import Box from '@mui/material/Box'

import BANNER_CITIES from 'assets/images/banner-cities.png'
import Banner from 'components/Banner'
import ErrorMessage from 'components/ErrorMessage'
import Loading from 'components/Loading'
import { useGetProvinces } from 'hooks/useGetProvinces'
import viewStyles from 'styles/viewStyles'

import CityForm from './components/CityForm'
import useCreateCity from './hooks/useCreateCity'
import type { CityFormData } from './types'

function AddCity() {
	const { data: provinces, isSuccess, isLoading, isError } = useGetProvinces()
	const { mutate: createCity } = useCreateCity()

	const handleCreateCity = (cityData: CityFormData) => {
		console.log('Creating city with data:', cityData)
		createCity(cityData)
	}

	if (isLoading) return <Loading />

	if (isError)
		return <ErrorMessage message='Ocurrió un error al cargar las provincias.' />

	if (provinces.length === 0)
		return <ErrorMessage message='Ocurrió un error al cargar las provincias.' />

	if (isSuccess) {
		return (
			<Box sx={viewStyles.container}>
				<Banner
					image={BANNER_CITIES}
					subtitle='Administra las regiones para tus beneficios desde aquí'
					title='Regiones'
				/>
				<CityForm onSubmit={handleCreateCity} provinces={provinces} />
			</Box>
		)
	}
}

export default AddCity
