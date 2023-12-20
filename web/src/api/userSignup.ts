import api from './axios'

const userSignup = async (registerForm: RegisterForm) =>
	api.post<RegisterForm, { token: string }>('/auth/signup', registerForm)

export default userSignup
