import type { Benefit } from 'types/benefit'

export interface Props {
	benefitData: Benefit
	keyQueryName: string
}

export interface BenefitDescription {
	title: string
	description: string
	text: string
	id: number
	categoryName: string
	categoryId: number
	averageQualification: number
}
