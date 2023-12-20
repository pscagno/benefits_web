import { useQuery } from '@tanstack/react-query'

import api from 'api/axios'

export interface Province {
	id: number
	name: string
}

export interface City {
	id: number
	name: string
	province: Province
}

const citiesFetch = async () => api.get<City[]>('/city')

export const useGetCities = () =>
	useQuery(['CITIES_FETCH'], citiesFetch, {
		select: data => data.data
	})
