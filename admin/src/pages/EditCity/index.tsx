import Box from '@mui/material/Box'
import { useParams } from 'react-router-dom'

import BANNER_CITIES from 'assets/images/banner-cities.png'
import Banner from 'components/Banner'
import ErrorMessage from 'components/ErrorMessage'
import Loading from 'components/Loading'
import { useGetProvinces } from 'hooks/useGetProvinces'
import viewStyles from 'styles/viewStyles'

import CityForm from './components/CityForm'
import useEditCity from './hooks/useEditCity'
import { useFindCity } from './hooks/useFindCity' // You should create this hook
import type { CityFormData } from './types'

function EditCity() {
	const { cityId } = useParams<{ cityId: string }>()
	const {
		data: city,
		isLoading: isLoadingCity,
		isError: isErrorCity
	} = useFindCity(Number.parseInt(cityId, 10))
	const {
		data: provinces,
		isSuccess: isSuccessProvinces,
		isLoading: isLoadingProvinces,
		isError: isErrorProvinces
	} = useGetProvinces()
	const { mutate: editCity } = useEditCity()

	const handleEditCity = (cityData: CityFormData) => {
		editCity({ ...cityData, id: Number.parseInt(cityId, 10) })
	}

	if (isLoadingCity || isLoadingProvinces) return <Loading />
	if (isErrorCity || isErrorProvinces)
		return <ErrorMessage message='Ocurrió un error al cargar los datos.' />
	if (!city) return <ErrorMessage message='Región no encontrada.' />
	if (isSuccessProvinces) {
		return (
			<Box sx={viewStyles.container}>
				<Banner
					image={BANNER_CITIES}
					subtitle='Administra las riones para tus beneficios desde aquí'
					title='Editar Región'
				/>
				<CityForm
					initialData={city}
					onSubmit={handleEditCity}
					provinces={provinces}
				/>
			</Box>
		)
	}
}

export default EditCity
