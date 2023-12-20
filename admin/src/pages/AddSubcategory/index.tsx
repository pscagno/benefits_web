import Box from '@mui/material/Box'

import BANNER_CATEGORIES from 'assets/images/banner-categories.png'
import Banner from 'components/Banner'
import ErrorMessage from 'components/ErrorMessage'
import Loading from 'components/Loading'
import { useGetCategories } from 'hooks/useGetCategories'
import viewStyles from 'styles/viewStyles'

import SubcategoryForm from './components/CityForm'
import useCreateSubcategory from './hooks/useCreateCity'
import type { SubcategoryFormData } from './types'

function AddSubcategory() {
	const { data: categories, isSuccess, isLoading, isError } = useGetCategories()
	const { mutate: createSubcategory } = useCreateSubcategory()

	const handleCreateSubcategory = (subcategoryData: SubcategoryFormData) => {
		console.log('Creating subcategory with data:', subcategoryData)
		createSubcategory(subcategoryData)
	}

	if (isLoading) return <Loading />

	if (isError)
		return <ErrorMessage message='Ocurrió un error al cargar las categorías.' />

	if (categories.length === 0)
		return <ErrorMessage message='Ocurrió un error al cargar las categorías.' />

	if (isSuccess) {
		return (
			<Box sx={viewStyles.container}>
				<Banner
					image={BANNER_CATEGORIES}
					subtitle='Administra las subcategorías para tus beneficios desde aquí'
					title='Subcategorías'
				/>
				<SubcategoryForm
					categories={categories}
					onSubmit={handleCreateSubcategory}
				/>
			</Box>
		)
	}
}

export default AddSubcategory
