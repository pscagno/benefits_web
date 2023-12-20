import { useQuery } from '@tanstack/react-query'

import api from 'api/axios'
import type { Province } from 'types/province'

const fetchProvinces = async () => api.get<Province[]>('/province')

export const PROVINCES_FETCH = 'PROVINCES_FETCH'

export const useGetProvinces = () =>
	useQuery([PROVINCES_FETCH], fetchProvinces, {
		select: data => data.data
	})
