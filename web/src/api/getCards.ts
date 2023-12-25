import type { QueryFunctionContext, QueryKey } from '@tanstack/react-query'

import api from './axios'

export interface BenefitsCard {
	categoryColor: string
	categoryName: string
	text: string
	imageList: string
	title: string
	description: string
	id: number
	bgColor?: string
	qualification?: number
}

interface ApiResponse {
	benefits: BenefitsCard[]
	nextPage: number
}

export default async function getCards(
	context: QueryFunctionContext<QueryKey, number>,
	id: number,
	search: string
) {
	const page = context.pageParam ?? 0
	const response = await api.get<ApiResponse>(
		search
			? `/benefit/search?page=${page}&keyword=${search}`
			: `/benefit?page=${page}`
	)

	const nextCursor =
		response.data.nextPage < 0 ? undefined : response.data.nextPage

	return {
		benefits: response.data.benefits,
		nextCursor
	}
}
