import type { QueryFunctionContext, QueryKey } from '@tanstack/react-query'

import type { BenefitsCard } from 'api/getCards'

export interface State {
	nameBenefitsCard: string
	imageList: string
	title: string
	description: string
	id: number
	bgColor: string
}

export interface CardBenefits {
	nameBenefitsCard: string
	imageList: string
	title: string
	description: string
	id: number
	onClickButton?: (id: number, state: State) => void
	bgColor: string | undefined
	qualification?: number
}

type GetBenefitsFunction = (
	context: QueryFunctionContext<QueryKey, number>
) => Promise<{ nextCursor?: number; benefits: BenefitsCard[] }>

export interface Props {
	getBenefits: GetBenefitsFunction
	header?: string
	bg?: string
	headerSize?: string
	keyQueryName: string
	id?: number
}
