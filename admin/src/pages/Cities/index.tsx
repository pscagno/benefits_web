import Box from '@mui/material/Box'
import { useState } from 'react'

import BANNER_CITIES from 'assets/images/banner-cities.png'
import Banner from 'components/Banner'
import CustomButton from 'components/Button'
import DeleteConfirmationModal from 'components/DeleteConfirmationModal'
import ErrorMessage from 'components/ErrorMessage'
import Loading from 'components/Loading'
import BasicTable from 'components/Table'
import { useGetCities } from 'hooks/useGetCities'
import useModal from 'hooks/useModal'
import useRedirect from 'hooks/useRedirect'
import useSearch from 'hooks/useSearch'
import type { DataItem } from 'hooks/useSearch/types'
import viewStyles from 'styles/viewStyles'

import useDeleteCity from './hooks/useDeleteCity'
import useColumns from './utils/columns'

function Cities() {
	const redirectTo = useRedirect()
	const { data, isSuccess, isLoading, isError } = useGetCities()
	const { open, handleOpenModal, handleCloseModal } = useModal()
	const { mutate: deleteCity } = useDeleteCity()
	const [selectedCity, setSelectedCity] = useState<number>(0)

	console.log('data (city):', data)

	const handleDelete = (id: number) => {
		setSelectedCity(id)
		handleOpenModal()
	}

	const handleEdit = id => redirectTo(`/cities/edit/${id}`)

	const handleConfirm = () => {
		deleteCity(selectedCity)
		handleCloseModal()
	}

	const handleAdd = () => redirectTo('/cities/add')

	const columns = useColumns({ handleDelete, handleEdit })

	const arrayToFilter: (keyof DataItem)[] = ['name', 'province']

	const { filteredDataHook, SearchInput } = useSearch(
		data,
		arrayToFilter,
		'Buscar por Nombre o Provincia'
	)

	console.log('columns (city):', columns)

	if (isLoading) return <Loading />

	if (isError)
		return <ErrorMessage message='Ocurrió un error al cargar las regiones.' />

	if (isSuccess) {
		return (
			<Box sx={viewStyles.container}>
				<Banner
					image={BANNER_CITIES}
					subtitle='Administra las regiones de tus beneficios desde aquí'
					title='Regiones'
				/>

				<DeleteConfirmationModal
					onClose={handleCloseModal}
					onConfirm={handleConfirm}
					open={open}
				/>

				<CustomButton onClick={handleAdd} text='Agregar Región' />
				{SearchInput}
				<BasicTable columns={columns} data={filteredDataHook} />
			</Box>
		)
	}
}

export default Cities
