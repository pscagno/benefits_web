import { useQuery } from '@tanstack/react-query'

import api from 'api/axios'
import type { HomeImage } from 'types/homeImage'

export const CAROUSEL_KEY = 'CAROUSEL_KEY'

const fetchHomeCarrousel = async () => api.get<HomeImage[]>('/homeCarrousel')

export const useGetHomeCarrousel = () =>
	useQuery([CAROUSEL_KEY], fetchHomeCarrousel, {
		select: data => data.data
	})
