import { Box, Button, TextField } from '@mui/material'
import { useState } from 'react'

function ProvinceForm({ onSubmit }) {
	const [provinceData, setProvinceData] = useState({
		name: 'Provincia desde Backoffice'
	})

	const handleChange = event => {
		const { name, value } = event.target
		setProvinceData({ ...provinceData, [name]: value })
	}

	const handleSubmit = event => {
		event.preventDefault()
		onSubmit(provinceData)
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
					label='Provincia'
					margin='normal'
					name='name'
					onChange={handleChange}
					value={provinceData.name}
				/>
				<Button
					color='primary'
					sx={{ marginTop: 2 }}
					type='submit'
					variant='contained'
				>
					Crear Provincia
				</Button>
			</Box>
		</Box>
	)
}

export default ProvinceForm
