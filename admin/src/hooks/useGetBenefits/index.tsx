import { useQuery } from '@tanstack/react-query'

import api from 'api/axios'
import type { Benefit } from 'types/benefit'

export interface ApiResponse {
	benefits: Benefit[]
	nextPage: number
}

export const BENEFIT_KEY = 'BENEFIT_KEY'

const fetchBenefits = async () => api.get<ApiResponse>('/benefit?page=0') // TODO resolver paginado con EP que falta

export const useGetBenefits = () =>
	useQuery([BENEFIT_KEY], fetchBenefits, {
		select: data => data.data.benefits
	})
