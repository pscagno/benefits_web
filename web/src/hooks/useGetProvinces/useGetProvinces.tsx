import { useQuery } from '@tanstack/react-query'

import api from 'api/axios'

export interface Province {
	id: number
	name: string
}

const fetchProvinces = async () => api.get<Province[]>('/province')

export const PROVINCES_KEY = 'PROVINCES'

export const useGetProvinces = () =>
	useQuery([PROVINCES_KEY], fetchProvinces, {
		select: data => data.data
	})
