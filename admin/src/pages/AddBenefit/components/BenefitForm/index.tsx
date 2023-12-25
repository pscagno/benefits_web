import { PhotoCamera } from '@mui/icons-material'
import {
	Box,
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography
} from '@mui/material'
import { useState } from 'react'

import type { SubCategory } from 'types/subcategory'

import type { BenefitFormData } from '../../types'

interface Props {
	onSubmit: (benefitData: BenefitFormData) => void
	subCategories: SubCategory[]
}

function BenefitForm({ onSubmit, subCategories }: Props) {
	const [benefit, setBenefit] = useState({
		title: '',
		description: '',
		text: '',
		inHome: false,
		subcategory: {
			id: 0
		},
		userCreation: '',
		link: '',
		imageHeader: '',
		imageHeaderMobile: '',
		imageLists: '',
		imageDetails1: '',
		imageDetails2: ''
	})

	const [previews, setPreviews] = useState({
		imageHeader: '',
		imageHeaderMobile: '',
		imageLists: '',
		imageDetails1: '',
		imageDetails2: ''
		// Add other image fields as necessary
	})

	const handleFileChange = event => {
		const { name, files } = event.target
		if (files[0]) {
			const fileReader = new FileReader()
			fileReader.onloadend = () => {
				// Actualiza el estado de 'benefit' con el archivo
				setBenefit({ ...benefit, [name]: files[0] })

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
				setBenefit({ ...benefit, [name]: e.target.result })
			})
			fileReader.readAsDataURL(files[0])
		} else {
			setBenefit({ ...benefit, [name]: value })
		}
	}

	const handleSubmit = event => {
		event.preventDefault()
		onSubmit(benefit)
	}

	const handleSelect = event => {
		const { value } = event.target
		setBenefit({ ...benefit, subcategory: { id: value } })
	}

	// Function to create image upload field with preview
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

	//   <form method="post" action="accion.php" enctype="multipart/form-data">

	// Ingresa el archivo:

	// <input name="imagen" type="file" />

	// </form>

	return (
		<Box
			component='form'
			onSubmit={handleSubmit}
			paddingY={8}
			style={{ display: 'flex', flexDirection: 'column' }}
		>
			{/* <form encType="multipart/form-data" id="myform" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'gray'}}> */}

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					width: '100%', // se adapta al 100% del ancho del contenedor
					maxWidth: '1000px', // maximo ancho de los inputs
					margin: 'auto', // centra el box
					backgroundColor: 'white',
					padding: 16,
					borderRadius: 4,
					marginTop: -16,
					boxShadow: '0px 4px 15px 0px #00000026',
					zIndex: 1,
					// Media queries para responsividad
					'@media (max-width: 600px)': {
						width: '90%', // 100% del ancho de la pantalla en dispositivos pequeños
						padding: 4
					}
				}}
			>
				<TextField
					label='Creado por'
					margin='normal'
					name='userCreation'
					onChange={handleChange}
					value={benefit.userCreation}
				/>
				<TextField
					label='Título'
					margin='normal'
					name='title'
					onChange={handleChange}
					value={benefit.title}
				/>
				<TextField
					label='Descripción'
					margin='normal'
					name='description'
					onChange={handleChange}
					value={benefit.description}
				/>
				<TextField
					label='Texto'
					margin='normal'
					name='text'
					onChange={handleChange}
					value={benefit.text}
				/>
				<FormControl margin='normal'>
					<InputLabel>Subcategoría</InputLabel>
					<Select
						label='Subcategoría'
						name='subcategoryName'
						onChange={handleSelect}
						value={benefit.subcategory.id}
					>
						{subCategories.map(({ id, name }) => (
							<MenuItem key={id} value={id}>
								{name}
							</MenuItem>
						))}
					</Select>
				</FormControl>

				<TextField
					label='Enlace'
					margin='normal'
					name='link'
					onChange={handleChange}
					value={benefit.link}
					fullWidth
				/>
				<FormControlLabel
					control={
						<Checkbox
							checked={benefit.inHome}
							name='inHome'
							// onChange={handleCheckboxChange}
						/>
					}
					label='Mostrar en inicio'
				/>

				<Box component='form' onSubmit={handleSubmit}>
					{createImageUploadField('imageHeader', 'Imagen del Encabezado')}
					{createImageUploadField(
						'imageHeaderMobile',
						'Imagen del Encabezado Móvil'
					)}
					{createImageUploadField('imageLists', 'Lista de Imágenes')}
					{createImageUploadField(
						'imageDetails1',
						'Detalle de Imagen 1 (Carrusel)'
					)}
					{createImageUploadField(
						'imageDetails2',
						'Detalle de Imagen 2 (Carrusel)'
					)}
				</Box>

				<Button
					color='primary'
					sx={{ marginTop: 2 }}
					type='submit'
					variant='contained'
				>
					Crear Beneficio
				</Button>
			</Box>
			{/* </form> */}
		</Box>
	)
}

export default BenefitForm
