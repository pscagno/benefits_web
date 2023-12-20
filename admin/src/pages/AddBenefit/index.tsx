import Box from '@mui/material/Box'

import { useGetSubCategories } from 'hooks/useGetSubCategories'
import viewStyles from 'styles/viewStyles'

import BANNER_BENEFITS from '../../assets/images/banner-benefits.png'
import Banner from '../../components/Banner'
import ErrorMessage from '../../components/ErrorMessage'
import Loading from '../../components/Loading'
import BenefitForm from './components/BenefitForm'
import type { BenefitFormData } from './hooks/useCreateBenefit'
import { useCreateBenefit } from './hooks/useCreateBenefit'

function AddBenefit() {
	const {
		data: subCategories,
		isSuccess,
		isError,
		isLoading
	} = useGetSubCategories()

	const { mutate: createBenefit } = useCreateBenefit()

	const handleCreateBenefit = (benefitData: BenefitFormData) => {
		// console.log('Creating benefit with data:', benefitData)
		createBenefit(benefitData)
	}

	if (isLoading) return <Loading />

	if (isError)
		return <ErrorMessage message='Ocurrió un error al cargar los beneficios.' />

	if (isSuccess) {
		return (
			<Box sx={viewStyles.container}>
				<Banner
					image={BANNER_BENEFITS}
					subtitle='Administra los beneficios de tu empresa desde aquí'
					title='Beneficios'
				/>
				<BenefitForm
					onSubmit={handleCreateBenefit}
					subCategories={subCategories}
				/>
			</Box>
		)
	}
}

export default AddBenefit
