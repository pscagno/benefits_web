import type { QueryFunctionContext, QueryKey } from '@tanstack/react-query'

import api from 'api/axios'
import type { CardBenefits } from 'types/cardBenefits'

interface ApiResponse {
	benefits: CardBenefits[]
	nextPage: number
}

export default async function getBenefitsBySubcategory(
	context: QueryFunctionContext<QueryKey, number>,
	id: number
) {
	const page = context.pageParam ?? 0

	const response = await api.get<ApiResponse>(
		`/benefit/subcategory/${id}?page=${page}`
	)

	const nextCursor =
		response.data.nextPage < 0 ? undefined : response.data.nextPage

	return {
		benefits: response.data.benefits,
		nextCursor
	}
}
