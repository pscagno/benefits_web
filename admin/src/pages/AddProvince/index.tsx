import Box from '@mui/material/Box'
// import { isError } from '@tanstack/react-query'

import viewStyles from 'styles/viewStyles'

import BANNER_PROVINCES from '../../assets/images/banner-provinces.png'
import Banner from '../../components/Banner'
// import ErrorMessage from '../../components/ErrorMessage'
// import Loading from '../../components/Loading'
import ProvinceForm from './components/ProvinceForm'
import useCreateProvince from './hooks/useCreateProvince'
import type { ProvinceFormData } from './types'

function AddProvince() {
	const { mutate: createProvince } = useCreateProvince()

	const handleCreateProvince = (provinceData: ProvinceFormData) => {
		console.log('Creating province with data:', provinceData)
		createProvince(provinceData)
	}

	// if (isLoading) return <Loading />

	// if (isError)
	// 	return <ErrorMessage message='Ocurrió un error al cargar los beneficios.' />

	// if (isSuccess && subCategoriesIsSuccess) {
	return (
		<Box sx={viewStyles.container}>
			<Banner
				image={BANNER_PROVINCES}
				subtitle='Administra las provincías para tus beneficios desde aquí'
				title='Provincias'
			/>
			<ProvinceForm onSubmit={handleCreateProvince} />
		</Box>
	)
}
// }

export default AddProvince
