export interface Props {
	nameBenefitsCard: string
	title: string
	id: number
	description: string
	bgColor: string
	handleSelectBenefit: () => void
	isSelected: boolean
	dataCarousel?: {
		image: string
		altImage: string
		id: number
	}[]
}
