import Box from '@mui/material/Box'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import DeleteConfirmationModal from 'components/DeleteConfirmationModal'
import ErrorMessage from 'components/ErrorMessage'
import Loading from 'components/Loading'
import BasicTable from 'components/Table'
import { useGetProvinces } from 'hooks/useGetProvinces'
import useModal from 'hooks/useModal'
import viewStyles from 'styles/viewStyles'

import BANNER_BENEFITS from '../../assets/images/banner-benefits.png'
import Banner from '../../components/Banner'
import CustomButton from '../../components/Button'
import useDeleteProvince from './hooks/useDeleteProvince'
import useColumns from './utils/columns'

function Provinces() {
	const { data, isSuccess, isLoading, isError } = useGetProvinces()
	const { open, handleOpenModal, handleCloseModal } = useModal()
	const { mutate: deleteProvince } = useDeleteProvince()
	const [selectedProvince, setSelectedProvince] = useState<number | undefined>()

	const navigate = useNavigate()

	const handleDelete = (id: number) => {
		setSelectedProvince(id)
		handleOpenModal()
	}

	const handleEdit = id => {
		console.log('Edit', id)
	}

	const handleConfirm = () => {
		deleteProvince(selectedProvince)
		handleCloseModal()
	}

	const handleAdd = () => navigate('/provinces/add')

	const columns = useColumns({ handleDelete, handleEdit })

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
				<BasicTable columns={columns} data={data} />
			</Box>
		)
	}
}

export default Provinces
