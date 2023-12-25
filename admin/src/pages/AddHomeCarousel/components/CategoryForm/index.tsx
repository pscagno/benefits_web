import { PhotoCamera } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import { useState } from 'react'

function HomeCarouselForm({ onSubmit }) {
	const [homeCarouselData, setHomeCarouselData] = useState({
		imageHeader: '',
		imageHeaderMobile: ''
	})

	const [previews, setPreviews] = useState({
		imageHeader: '',
		imageHeaderMobile: ''
	})

	const handleFileChange = event => {
		const { name, files } = event.target
		if (files[0]) {
			const fileReader = new FileReader()
			fileReader.onloadend = () => {
				// Actualiza el estado de 'benefit' con el archivo
				setHomeCarouselData({ ...homeCarouselData, [name]: files[0] })

				// Actualiza el estado de 'previews' con la vista previa de la imagen
				setPreviews({ ...previews, [name]: fileReader.result }) // Acá le inserta la imagen, para que luego la podamos visualizar abajo
			}
			fileReader.readAsDataURL(files[0])
		}
	}

	const handleChange = event => {
		const { name, value, files } = event.target
		if (files) {
			const fileReader = new FileReader()
			fileReader.addEventListener('load', e => {
				setHomeCarouselData({ ...homeCarouselData, [name]: e.target.result })
			})
			fileReader.readAsDataURL(files[0])
		} else {
			setHomeCarouselData({ ...homeCarouselData, [name]: value })
		}
	}

	const handleSubmit = event => {
		event.preventDefault()
		onSubmit(homeCarouselData)
	}

	const createImageUploadField = (name: string, label: string) => (
		<Box sx={{ my: 2 }}>
			<Typography fontWeight='bold' variant='body2'>
				{label}
			</Typography>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					gap: 4,
					alignContent: 'start'
				}}
			>
				<Button
					component='label'
					startIcon={<PhotoCamera />}
					style={{ width: 200 }}
					variant='contained'
				>
					Subir
					<input
						accept='image/*'
						name={name}
						onChange={handleFileChange}
						type='file'
						hidden
					/>
				</Button>
				{previews[name] && (
					<Box
						sx={{
							maxWidth: 100,
							height: 100,
							overflow: 'hidden',
							borderRadius: '4px'
						}}
					>
						<img
							alt='Preview'
							src={previews[name]}
							style={{ maxWidth: '100%', height: '100%', objectFit: 'cover' }}
						/>
					</Box>
				)}
			</Box>
		</Box>
	)

	return (
		<Box
			component='form'
			onSubmit={handleSubmit}
			paddingY={8}
			style={{ display: 'flex', flexDirection: 'column' }}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					width: '100%',
					maxWidth: '1000px',
					margin: 'auto',
					backgroundColor: 'white',
					padding: 16,
					borderRadius: 4,
					marginTop: -16,
					boxShadow: '0px 4px 15px 0px #00000026',
					zIndex: 1,
					'@media (max-width: 600px)': {
						width: '90%',
						padding: 4
					}
				}}
			>
				<Box component='form' onSubmit={handleSubmit}>
					{createImageUploadField('imageHeader', 'Imagen del Encabezado')}
					{createImageUploadField(
						'imageHeaderMobile',
						'Imagen del Encabezado Móvil'
					)}
				</Box>

				<Button
					color='primary'
					sx={{ marginTop: 2 }}
					type='submit'
					variant='contained'
				>
					Subir imágenes
				</Button>
			</Box>
		</Box>
	)
}

export default HomeCarouselForm
