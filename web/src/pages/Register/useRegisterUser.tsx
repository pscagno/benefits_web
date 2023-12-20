import { useMutation } from '@tanstack/react-query'
import { useCallback } from 'react'

import api from 'api/axios'
import { useAuth } from 'context/AuthContext'

export interface RegisterForm {
	firstName: string
	lastName: string
	email: string
	password: string
	idCity: number
}

const userSignup = async (registerForm: RegisterForm) =>
	api.post<RegisterForm, { data: { token: string } }>('/auth/signup', registerForm)

export const useRegisterUser = () => {
	const { login } = useAuth()

	const onSuccess = useCallback(
		(data: { data: { token: string } }) => {
			login(data.data.token)
		},
		[login]
	)

	return useMutation(userSignup, {
		onSuccess,
	})
}
