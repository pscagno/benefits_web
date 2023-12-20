import Box from '@mui/material/Box'
// import { isError } from '@tanstack/react-query'

import viewStyles from 'styles/viewStyles'

import BANNER_CATEGORIES from '../../assets/images/banner-categories.png'
import Banner from '../../components/Banner'
// import ErrorMessage from '../../components/ErrorMessage'
// import Loading from '../../components/Loading'
import type { CategoryFormData } from './types'
import CategoryForm from './components/CategoryForm'
import { useCreateCategory } from './hooks/useCreateCategory'

function AddCategory() {
	const { mutate: createCategory } = useCreateCategory()

	const handleCreateCategory = (categoryData: CategoryFormData) => {
		console.log('Creating category with data:', categoryData)
		createCategory(categoryData)
	}

	// if (isLoading) return <Loading />

	// if (isError)
	// 	return <ErrorMessage message='Ocurrió un error al cargar los beneficios.' />

	// if (isSuccess && subCategoriesIsSuccess) {
	return (
		<Box sx={viewStyles.container}>
			<Banner
				image={BANNER_CATEGORIES}
				subtitle='Administra las categorías de tus beneficios desde aquí'
				title='Categorías'
			/>
			<CategoryForm onSubmit={handleCreateCategory} />
		</Box>
	)
}
// }

export default AddCategory
