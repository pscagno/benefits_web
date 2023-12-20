import Box from '@mui/material/Box'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import BANNER_CITIES from 'assets/images/banner-cities.png'
import Banner from 'components/Banner'
import CustomButton from 'components/Button'
import DeleteConfirmationModal from 'components/DeleteConfirmationModal'
import ErrorMessage from 'components/ErrorMessage'
import Loading from 'components/Loading'
import BasicTable from 'components/Table'
import { useGetCities } from 'hooks/useGetCities'
import useModal from 'hooks/useModal'
import viewStyles from 'styles/viewStyles'

import useDeleteCity from './hooks/useDeleteCity'
import useColumns from './utils/columns'

function Cities() {
	const { data, isSuccess, isLoading, isError } = useGetCities()
	const { open, handleOpenModal, handleCloseModal } = useModal()
	const { mutate: deleteCity } = useDeleteCity()
	const [selectedCity, setSelectedCity] = useState<number>(0)

	console.log('data (city):', data)

	const navigate = useNavigate()

	const handleDelete = (id: number) => {
		setSelectedCity(id)
		handleOpenModal()
	}

	const handleEdit = id => {
		console.log('Edit', id)
	}

	const handleConfirm = () => {
		deleteCity(selectedCity)
		handleCloseModal()
	}

	const handleAdd = () => navigate('/cities/add')

	const columns = useColumns({ handleDelete, handleEdit })

	console.log('columns (city):', columns)

	if (isLoading) return <Loading />

	if (isError)
		return <ErrorMessage message='Ocurrió un error al cargar las ciudades.' />

	if (isSuccess) {
		return (
			<Box sx={viewStyles.container}>
				<Banner
					image={BANNER_CITIES}
					subtitle='Administra las ciudades de tus beneficios desde aquí'
					title='Ciudades'
				/>

				<DeleteConfirmationModal
					onClose={handleCloseModal}
					onConfirm={handleConfirm}
					open={open}
				/>

				<CustomButton onClick={handleAdd} text='Agregar Ciudad' />
				<BasicTable columns={columns} data={data} />
			</Box>
		)
	}
}

export default Cities
