import { useQuery } from '@tanstack/react-query'

import api from 'api/axios'
import type { City } from 'types/city'

export const CITIES_FETCH = 'CITIES_FETCH'

const citiesFetch = async () => api.get<City[]>('/city')

export const useGetCities = () =>
	useQuery([CITIES_FETCH], citiesFetch, {
		select: data => data.data
	})
