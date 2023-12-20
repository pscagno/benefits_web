import { PhotoCamera } from '@mui/icons-material'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'

function CategoryForm({ onSubmit }) {
	const [categoryData, setCategoryData] = useState({
		name: 'Categoría desde Backoffice',
		color: '#0b3948',
		orderInMenu: '2',
		imageHeader: '',
		imageHeaderMobile: '',
		imageMenu: ''
	})

	const [previews, setPreviews] = useState({
		imageHeader: '',
		imageHeaderMobile: '',
		imageMenu: ''
	})

	const handleFileChange = event => {
		const { name, files } = event.target
		if (files[0]) {
			const fileReader = new FileReader()
			fileReader.onloadend = () => {
				// Actualiza el estado de 'benefit' con el archivo
				setCategoryData({ ...categoryData, [name]: files[0] })

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
				setCategoryData({ ...categoryData, [name]: e.target.result })
			})
			fileReader.readAsDataURL(files[0])
		} else {
			setCategoryData({ ...categoryData, [name]: value })
		}
	}

	const handleSubmit = event => {
		event.preventDefault()
		onSubmit(categoryData)
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
				<TextField
					label='Nombre de la Categoría'
					margin='normal'
					name='name'
					onChange={handleChange}
					value={categoryData.name}
				/>
				<TextField
					label='Color (ej: #F0F0F0)'
					margin='normal'
					name='color'
					onChange={handleChange}
					value={categoryData.color}
				/>
				<TextField
					label='Ordén en el menú'
					margin='normal'
					name='orderInMenu'
					onChange={handleChange}
					value={categoryData.orderInMenu}
				/>
				<Box component='form' onSubmit={handleSubmit}>
					{createImageUploadField('imageHeader', 'Imagen del Encabezado')}
					{createImageUploadField(
						'imageHeaderMobile',
						'Imagen del Encabezado Móvil'
					)}
					{createImageUploadField('imageMenu', 'Imagen del menú')}
				</Box>

				<Button
					color='primary'
					sx={{ marginTop: 2 }}
					type='submit'
					variant='contained'
				>
					Crear Categoría
				</Button>
			</Box>
		</Box>
	)
}

export default CategoryForm
