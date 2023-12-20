import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField
} from '@mui/material'
import { useState } from 'react'

import type { Category } from 'types/category'

import type { SubcategoryFormData } from '../../types'

interface Props {
	onSubmit: (subcategoryData: SubcategoryFormData) => void
	categories: Category[]
}

function SubcategoryForm({ onSubmit, categories }: Props) {
	const [subcategory, setSubcategory] = useState({
		name: 'Subcategoría desde Backoffice',
		category: {
			id: 1
		}
	})

	const handleChange = event => {
		const { name, value } = event.target
		setSubcategory({ ...subcategory, [name]: value })
	}

	const handleSubmit = event => {
		event.preventDefault()
		onSubmit(subcategory)
	}

	const handleSelect = event => {
		const { value } = event.target
		setSubcategory({ ...subcategory, category: { id: value } })
	}

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
					label='Subcategoría'
					margin='normal'
					name='name'
					onChange={handleChange}
					value={subcategory.name}
				/>
				<FormControl margin='normal'>
					<InputLabel>Categoría</InputLabel>
					<Select
						label='Categoría'
						name='category'
						onChange={handleSelect}
						value={subcategory.category.id}
					>
						{categories.map(({ id, name }) => (
							<MenuItem key={id} value={id}>
								{name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<Button
					color='primary'
					sx={{ marginTop: 2 }}
					type='submit'
					variant='contained'
				>
					Crear Subcategoría
				</Button>
			</Box>
		</Box>
	)
}

export default SubcategoryForm
