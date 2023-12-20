import { useMutation } from '@tanstack/react-query'
import { useCallback } from 'react'

import api from 'api/axios'
import { useAuth } from 'context/AuthContext'

export interface LoginForm {
	email: string
	password: string
}

const userSignup = async (loginPayload: LoginForm) =>
	api.post<LoginForm, { token: string }>('/auth/signin', loginPayload)

export const useLoginUser = () => {
	const { login } = useAuth()

	const onSuccess = useCallback(
		(data: { token: string }) => {
			login(data.data.token)
		},
		[login]
	)

	return useMutation(userSignup, {
		onSuccess
	})
}
