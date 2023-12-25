import Box from '@mui/material/Box'
import { useState } from 'react'

import BANNER_CATEGORIES from 'assets/images/banner-categories.png'
import Banner from 'components/Banner'
import CustomButton from 'components/Button'
import DeleteConfirmationModal from 'components/DeleteConfirmationModal'
import ErrorMessage from 'components/ErrorMessage'
import Loading from 'components/Loading'
import BasicTable from 'components/Table'
import { useGetSubCategories } from 'hooks/useGetSubCategories'
import useModal from 'hooks/useModal'
import useRedirect from 'hooks/useRedirect'
import useSearch from 'hooks/useSearch'
import type { DataItem } from 'hooks/useSearch/types'
import viewStyles from 'styles/viewStyles'

import useDeleteSubCategory from './hooks/useDeleteCity'
import useColumns from './utils/columns'

function SubCategories() {
	const redirectTo = useRedirect()
	const { data, isSuccess, isLoading, isError } = useGetSubCategories()
	const { open, handleOpenModal, handleCloseModal } = useModal()
	const { mutate: deleteSubCategory } = useDeleteSubCategory()
	const [selectedSubCategory, setSelectedSubCategory] = useState<number>(0)

	const handleDelete = (id: number) => {
		setSelectedSubCategory(id)
		handleOpenModal()
	}

	const handleEdit = id => redirectTo(`/subcategories/edit/${id}`)

	const handleConfirm = () => {
		deleteSubCategory(selectedSubCategory)
		handleCloseModal()
	}

	const handleAdd = () => redirectTo('/subcategories/add')

	const columns = useColumns({ handleDelete, handleEdit })

	console.log('columns (subcategory):', columns)

	const arrayToFilter: (keyof DataItem)[] = ['name']

	const { filteredDataHook, SearchInput } = useSearch(
		data,
		arrayToFilter,
		'Buscar por Región'
	)

	if (isLoading) return <Loading />

	if (isError)
		return (
			<ErrorMessage message='Ocurrió un error al cargar las subcategorías.' />
		)

	if (isSuccess) {
		return (
			<Box sx={viewStyles.container}>
				<Banner
					image={BANNER_CATEGORIES}
					subtitle='Administra las Subcategorías para tus beneficios desde aquí'
					title='Subcategorías'
				/>

				<DeleteConfirmationModal
					onClose={handleCloseModal}
					onConfirm={handleConfirm}
					open={open}
				/>

				<CustomButton onClick={handleAdd} text='Agregar Subcategoría' />
				{SearchInput}
				<BasicTable columns={columns} data={filteredDataHook} />
			</Box>
		)
	}
}

export default SubCategories
