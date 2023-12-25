import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField
} from '@mui/material'
import { useEffect, useState } from 'react'

import type { Province } from 'types/province'

import type { CityFormData } from '../../types'

interface Props {
	onSubmit: (cityData: CityFormData) => void
	provinces: Province[]
	initialData?: CityFormData
}

function CityForm({ onSubmit, provinces, initialData }: Props) {
	const [city, setCity] = useState(initialData)
	const [provinceData, setProvinceData] = useState<Province[]>([])

	useEffect(() => {
		if (initialData) {
			setProvinceData(initialData)
		}
	}, [initialData])

	const handleChange = event => {
		const { name, value } = event.target
		setCity({ ...city, [name]: value })
	}

	const handleSubmit = event => {
		event.preventDefault()
		onSubmit(city)
	}

	const handleSelect = event => {
		const { value } = event.target
		setCity({ ...city, province: { id: value } })
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
					label='Región'
					margin='normal'
					name='name'
					onChange={handleChange}
					value={city.name}
				/>
				<FormControl margin='normal'>
					<InputLabel>Provincia</InputLabel>
					<Select
						label='Provincia'
						name='provinceName'
						onChange={handleSelect}
						value={city.province.id}
					>
						{provinces.map(({ id, name }) => (
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
					Editar Región
				</Button>
			</Box>
		</Box>
	)
}

export default CityForm
