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

const userFavoriteBenefitsFetch = async () =>
	api.get<City>('/benefit/favorites?page=0')

export const useUserFavoriteBenefitsFetch = () =>
	useQuery(['OTRA_CSO'], userFavoriteBenefitsFetch, {
		select: data => data.data
	})
