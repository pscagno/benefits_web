import { useQuery } from '@tanstack/react-query'

import api from 'api/axios'
import type { Benefit } from 'types/benefit'

export interface ApiResponse {
	benefits: Benefit[]
	nextPage: number
}

export const ALL_BENEFITS_KEY = 'ALL_BENEFITS_KEY'

const fetchAllBenefits = async () => api.get<ApiResponse>('/benefit?page=0') // TODO falta EP FETCH ALL

export const useGetAllBenefits = () =>
	useQuery([ALL_BENEFITS_KEY], fetchAllBenefits, {
		select: data => data.data.benefits
	})
