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
import { useGetHomeCarrousel } from 'hooks/useGetHomeCarousel'
import useModal from 'hooks/useModal'
import viewStyles from 'styles/viewStyles'

import useDeleteHomeImage from './hooks/useDeleteHomeImage'
import useColumns from './utils/columns'

function HomeCarrousel() {
	const {
		data: homeCarrousel,
		isSuccess,
		isLoading,
		isError
	} = useGetHomeCarrousel()
	const { open, handleOpenModal, handleCloseModal } = useModal()
	const { mutate: deleteHomeImage } = useDeleteHomeImage()
	const [selectedHomeImage, setSelectedHomeImage] = useState<number>(0)

	console.log('data (homeCarrousel):', homeCarrousel)

	const navigate = useNavigate()

	const handleDelete = (id: number) => {
		setSelectedHomeImage(id)
		handleOpenModal()
	}

	const handleEdit = id => {
		console.log('Edit', id)
	}

	const handleConfirm = () => {
		deleteHomeImage(selectedHomeImage)
		handleCloseModal()
	}

	const handleAdd = () => navigate('/homecarousel/add')

	const columns = useColumns({ handleDelete })

	console.log('columns (city):', columns)

	if (isLoading) return <Loading />

	if (isError)
		return <ErrorMessage message='Ocurrió un error al cargar las imágenes.' />

	if (isSuccess) {
		return (
			<Box sx={viewStyles.container}>
				<Banner
					image={BANNER_CITIES}
					subtitle='Administra las imágenes de la página Home desde aquí'
					title='Home Carousel'
				/>

				<DeleteConfirmationModal
					onClose={handleCloseModal}
					onConfirm={handleConfirm}
					open={open}
				/>

				<CustomButton onClick={handleAdd} text='Agregar Imágenes' />
				<BasicTable columns={columns} data={homeCarrousel} />
			</Box>
		)
	}
}

export default HomeCarrousel
