export interface State {
	nameBenefitsCard: string
	image: string
	title: string
	description: string
	id: number
	bgColor: string
}

export interface CardBenefits {
	nameBenefitsCard: string
	image: string
	title: string
	description: string
	id: number
	onClickButton?: (id: number, state: State) => void
	bgColor: string
	averageQualification?: number
}

export interface Props {
	data: CardBenefits[]
	header?: string
	bg?: string
	headerSize?: string
}
