export interface State {
	nameBenefitsCard: string
	image: string
	title: string
	description: string
	id: number
	bgColor: string
}

export interface Props {
	nameBenefitsCard: string
	image: string
	title: string
	description: string
	id: number
	onClickButton: (id: number, state: State) => void
	bgColor: string
	averageQualification?: number
}

export interface DescriptionCards {
	title: string
	description: string
	handleIWantButton: () => void
	averageQualification?: number
}
