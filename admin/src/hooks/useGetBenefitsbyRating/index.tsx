import { useQuery } from '@tanstack/react-query'

import api from 'api/axios'
import type { Benefit } from 'types/benefit'

export interface ApiResponse {
	benefits: Benefit[]
	nextPage: number
}

export const BENEFITS_BY_RATING = 'BENEFITS_BY_RATING'

const fetchBenefitsByRating = async () =>
	api.get<ApiResponse>('/benefit/reportAverage')

export const useGetBenefitsByRating = () =>
	useQuery([BENEFITS_BY_RATING], fetchBenefitsByRating, {
		select: data => data.data
	})
