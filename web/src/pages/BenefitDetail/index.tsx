import { useQuery } from '@tanstack/react-query'
import { useCallback, useState } from 'react'
import { useLocation } from 'react-router-dom'

import useMediaQuery from 'Utils/mediaQuery'
import getImagesCarousel from 'api/getHomeImagesCarousel'
import type { State } from 'components/BenefitCard/types'
import Loading from 'components/Loading/Loading'

import MobileView from './componentes/DesktopMobile'
import DesktopView from './componentes/DesktopView'

function BenefitDetail() {
	const location = useLocation()
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const { state } = location

	const mobile = useMediaQuery({ query: '(max-width: 768px)' })

	const { nameBenefitsCard, title, description, bgColor, id } = state as State
	const [isSelected, setIsSelected] = useState(false)

	const { isLoading, error, data } = useQuery(
		['ImagesCarousel'],
		getImagesCarousel
	)
	const handleSelectBenefit = useCallback(() => {
		setIsSelected(previousSelected => !previousSelected)
	}, [])

	if (isLoading) {
		return <Loading />
	}
	if (error) <p>No se pudieron cargar las cards...</p>

	return mobile ? (
		<MobileView
			bgColor={bgColor}
			dataCarousel={data}
			description={description}
			handleSelectBenefit={handleSelectBenefit}
			id={id}
			isSelected={isSelected}
			nameBenefitsCard={nameBenefitsCard}
			title={title}
		/>
	) : (
		<DesktopView
			bgColor={bgColor}
			dataCarousel={data}
			description={description}
			handleSelectBenefit={handleSelectBenefit}
			id={id}
			isSelected={isSelected}
			nameBenefitsCard={nameBenefitsCard}
			title={title}
		/>
	)
}

export default BenefitDetail
