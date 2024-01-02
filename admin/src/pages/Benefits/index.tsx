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
import { useGetBenefits } from 'hooks/useGetBenefits'
import useModal from 'hooks/useModal'
import useRedirect from 'hooks/useRedirect'
import viewStyles from 'styles/viewStyles'

import useDeleteBenefit from './hooks/useDeleteBenefit'
import useColumns from './utils/columns'

function Benefits() {
	const { data: benefits, isSuccess, isLoading, isError } = useGetBenefits()
	const { open, handleOpenModal, handleCloseModal } = useModal()
	const { mutate: deleteBenefit } = useDeleteBenefit()
	const [selectedBenefit, setSelectedBenefit] = useState<number | undefined>()

	const redirectTo = useRedirect()
	const navigate = useNavigate()

	const handleDelete = (id: number) => {
		setSelectedBenefit(id)
		handleOpenModal()
	}

	const handleEdit = id => redirectTo(`/benefit/edit/${id}`)

	const handleConfirm = () => {
		deleteBenefit(selectedBenefit)
		handleCloseModal()
	}

	const handleAdd = () => navigate('/benefits/add')

	const columns = useColumns({ handleDelete, handleEdit })

	if (isLoading) return <Loading />

	if (isError)
		return <ErrorMessage message='Ocurrió un error al cargar los beneficios.' />

	if (isSuccess) {
		return (
			<Box sx={viewStyles.container}>
				<Banner
					image={BANNER_BENEFITS}
					subtitle='Administra los beneficios de tu empresa desde aquí'
					title='Beneficios'
				/>

				<DeleteConfirmationModal
					onClose={handleCloseModal}
					onConfirm={handleConfirm}
					open={open}
				/>

				<CustomButton onClick={handleAdd} text='Agregar Beneficio' />
				<SortableTable
					columns={columns}
					data={benefits}
					order='asc'
					orderBy='name'
				/>
			</Box>
		)
	}
}

export default Benefits
