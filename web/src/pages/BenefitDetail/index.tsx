import { memo } from 'react'
import { useParams } from 'react-router-dom'

import useMediaQuery from 'Utils/mediaQuery'
import Loading from 'components/Loading/Loading'

import MobileView from './componentes/DesktopMobile'
import DesktopView from './componentes/DesktopView'
import useGetBenefitById from './useGetBenefitById'

function BenefitDetail() {
	const mobile = useMediaQuery({ query: '(max-width: 768px)' })

	const { id } = useParams()
	const numberBenefitId = id ? Number.parseInt(id, 10) : 0

	const GET_BENEFIT_BY_ID = `GET_BENEFIT_BY_ID_${id}`

	const {
		data: benefitData,
		isLoading,
		isError,
		isSuccess
	} = useGetBenefitById(numberBenefitId)

	if (isLoading) {
		return (
			<div
				className='flex h-screen items-center justify-center'
				style={{ flexDirection: 'column' }}
			>
				<Loading />
			</div>
		)
	}

	if (isError) {
		return (
			<div
				className='flex h-screen items-center justify-center'
				style={{ flexDirection: 'column' }}
			>
				<p className='text-center' style={{ margin: 8 }}>
					Ocurrió un error al cargar el beneficio seleccionado
				</p>
			</div>
		)
	}

	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	if (isSuccess) {
		return mobile ? (
			<MobileView benefitData={benefitData} keyQueryName={GET_BENEFIT_BY_ID} />
		) : (
			<DesktopView benefitData={benefitData} keyQueryName={GET_BENEFIT_BY_ID} />
		)
	}
}

export default memo(BenefitDetail)
