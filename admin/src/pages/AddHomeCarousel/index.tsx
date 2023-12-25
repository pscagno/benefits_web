import Box from '@mui/material/Box'
// import { isError } from '@tanstack/react-query'

import viewStyles from 'styles/viewStyles'

import BANNER_CATEGORIES from '../../assets/images/banner-categories.png'
import Banner from '../../components/Banner'
// import ErrorMessage from '../../components/ErrorMessage'
// import Loading from '../../components/Loading'
import CategoryForm from './components/CategoryForm'
import useCreateHomeCarousel from './hooks/useCreateCategory'
import type { ImageFormData } from './types'

function AddHomeCarousel() {
	const { mutate: createHomeCarousel } = useCreateHomeCarousel()

	const handleCreateHomeCarousel = (homeCarouselData: ImageFormData) => {
		console.log('Creating home carousel with data:', homeCarouselData)
		createHomeCarousel(homeCarouselData)
	}

	// if (isLoading) return <Loading />

	// if (isError)
	// 	return <ErrorMessage message='Ocurrió un error al cargar los beneficios.' />

	// if (isSuccess && subCategoriesIsSuccess) {
	return (
		<Box sx={viewStyles.container}>
			<Banner
				image={BANNER_CATEGORIES}
				subtitle='Administra las imágenes de la página Home desde aquí'
				title='Home Carousel'
			/>
			<CategoryForm onSubmit={handleCreateHomeCarousel} />
		</Box>
	)
}
// }

export default AddHomeCarousel
