import Box from '@mui/material/Box'
// import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// import DeleteConfirmationModal from 'components/DeleteConfirmationModal'
import ErrorMessage from 'components/ErrorMessage'
import Loading from 'components/Loading'
import BasicTable from 'components/Table'
import { useGetCategories } from 'hooks/useGetCategories'
// import useModal from 'hooks/useModal'
import useSearch from 'hooks/useSearch'
import type { DataItem } from 'hooks/useSearch/types'
import viewStyles from 'styles/viewStyles'

import BANNER_BENEFITS from '../../assets/images/banner-benefits.png'
import Banner from '../../components/Banner'
// import CustomButton from '../../components/Button'
// import useDeleteCategory from './hooks/useDeleteCategory'
import useColumns from './utils/columns'

function Users() {
	// TODO falta EP
	const { data, isSuccess, isLoading, isError } = useGetCategories()
	// const { open, handleOpenModal, handleCloseModal } = useModal()
	// const { mutate: deleteCategory } = useDeleteCategory()
	// const [selectedCategory, setSelectedCategory] = useState<number | undefined>()

	const navigate = useNavigate()

	// const handleDelete = (id: number) => {
	// 	setSelectedCategory(id)
	// 	handleOpenModal()
	// }

	// const handleEdit = id => {
	// 	console.log('Edit', id)
	// }

	// const handleConfirm = () => {
	// 	deleteCategory(selectedCategory)
	// 	handleCloseModal()
	// }

	// const handleAdd = () => navigate('/categories/add')

	// const columns = useColumns({ handleDelete, handleEdit })
	const columns = useColumns({ handleEdit })

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
					subtitle='Administra las categorías de tu empresa desde aquí'
					title='Categorías'
				/>

				{/* <DeleteConfirmationModal
					onClose={handleCloseModal}
					onConfirm={handleConfirm}
					open={open}
				/> */}

				{/* <CustomButton onClick={handleAdd} text='Agregar categoría' /> */}
				{SearchInput}
				<BasicTable columns={columns} data={filteredDataHook} />
			</Box>
		)
	}
}

export default Users
