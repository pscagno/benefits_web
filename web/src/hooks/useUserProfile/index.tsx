import { useQuery } from '@tanstack/react-query'

import api from 'api/axios'

export interface UserProfile {
	id: number
	name: string
	email: string
	cityName: string
	cityId: number
	categories: [number]
}

const fetchUserProfile = async () => api.get<UserProfile[]>('/auth/user')

export const USER_PROFILE_KEY = 'USER_PROFILE'

export const useGetUserProfile = () =>
	useQuery([USER_PROFILE_KEY], fetchUserProfile, {
		select: data => data.data
	})
