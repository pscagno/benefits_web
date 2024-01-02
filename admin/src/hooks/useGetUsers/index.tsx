import { useQuery } from '@tanstack/react-query'

import api from 'api/axios'

const fetchUsers = async () => api.get<Type[]>('/user/all')

export const USER_KEY = 'USERS_ALL'

export const useGetUsers = () =>
	useQuery([USER_KEY], fetchUsers, {
		select: data => data.data
	})
