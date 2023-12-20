export interface State {
	nameBenefitsCard: string
	imageList: string
	title: string
	description: string
	id: number
	bgColor: string
}

export interface BenefitsCard {
	nameBenefitsCard: string
	imageList: string
	title: string
	description: string
	id: number
	onClickButton: (id: number, state: State) => void
	bgColor?: string
	qualification?: number
}

export interface DescriptionCards {
	title: string
	description: string
	handleIWantButton: () => void
	qualification?: number
}
