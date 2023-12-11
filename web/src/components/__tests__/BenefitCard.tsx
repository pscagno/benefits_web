/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import BenefitCard from 'components/BenefitCard/BenefitCardDesktop'

describe('<Button />', () => {
	it('should render the card', () => {
		const { container } = render(
			<BenefitCard
				averageQualification={4}
				bgColor='red'
				description='El mejor sushi de la ciudad esta en Dashi'
				id={1}
				image='img1'
				nameBenefitsCard='Gastronomia'
				onClickButton={() => {}}
				title='Sushi para 2'
			/>
		)
		const image = container.querySelector('[alt="Gastronomia"]')
		expect(
			screen.getByText('El mejor sushi de la ciudad esta en Dashi')
		).toBeInTheDocument()
		expect(screen.getByText('Gastronomia')).toBeInTheDocument()
		expect(screen.getByText('Sushi para 2')).toBeInTheDocument()

		expect(image).toBeInTheDocument()
		expect(image).toHaveAttribute('src', 'img1')
	})
})
