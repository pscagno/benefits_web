import { useQuery } from '@tanstack/react-query';

import api from 'api/axios';

export interface Benefit {
	id: number
	name: string
}

export const BENEFIT_KEY = 'BENEFIT_KEY';

const fetchBenefits = async () => api.get<Benefit[]>('/benefit?page=0')

export const useGetBenefits = () =>
	useQuery([BENEFIT_KEY], fetchBenefits, {
		select: data => data.data
	})
