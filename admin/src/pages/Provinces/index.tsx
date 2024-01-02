import Box from '@mui/material/Box'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import BANNER_BENEFITS from 'assets/images/banner-benefits.png'
import Banner from 'components/Banner'
import CustomButton from 'components/Button'
import DeleteConfirmationModal from 'components/DeleteConfirmationModal'
import ErrorMessage from 'components/ErrorMessage'
import Loading from 'components/Loading'
import SortableTable from 'components/SortableTable'
import { useGetProvinces } from 'hooks/useGetProvinces'
import useModal from 'hooks/useModal'
import useRedirect from 'hooks/useRedirect'
import useSearch from 'hooks/useSearch'
import type { DataItem } from 'hooks/useSearch/types'
import viewStyles from 'styles/viewStyles'

import useDeleteProvince from './hooks/useDeleteProvince'
import useColumns from './utils/columns'

function Provinces() {
	const redirectTo = useRedirect()
	const { data, isSuccess, isLoading, isError } = useGetProvinces()
	const { open, handleOpenModal, handleCloseModal } = useModal()
	const { mutate: deleteProvince } = useDeleteProvince()
	const [selectedProvince, setSelectedProvince] = useState<number | undefined>()
	const navigate = useNavigate()

	const handleDelete = (id: number) => {
		setSelectedProvince(id)
		handleOpenModal()
	}

	const handleEdit = id => redirectTo(`/provinces/edit/${id}`)

	const handleConfirm = () => {
		deleteProvince(selectedProvince)
		handleCloseModal()
	}

	const handleAdd = () => navigate('/provinces/add')

	const columns = useColumns({ handleDelete, handleEdit })

	const arrayToFilter: (keyof DataItem)[] = ['name']

	const { filteredDataHook, SearchInput } = useSearch(
		data,
		arrayToFilter,
		'Buscar por Nombre'
	)

	if (isLoading) return <Loading />

	if (isError)
		return <ErrorMessage message='Ocurrió un error al cargar los beneficios.' />

	if (isSuccess) {
		return (
			<Box sx={viewStyles.container}>
				<Banner
					image={BANNER_BENEFITS}
					subtitle='Administra las provincias de tu empresa desde aquí'
					title='Provincias'
				/>

				<DeleteConfirmationModal
					onClose={handleCloseModal}
					onConfirm={handleConfirm}
					open={open}
				/>

				<CustomButton onClick={handleAdd} text='Agregar provincia' />
				{SearchInput}
				<SortableTable
					columns={columns}
					data={filteredDataHook}
					order='asc'
					orderBy='name'
				/>
			</Box>
		)
	}
}

export default Provinces
