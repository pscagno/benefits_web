import { z } from 'zod'

const EMAIL_REGEX = /^[\w!#$%&'+./=?^`{|}~-]+@[\dA-Za-z-]+.[\dA-Za-z-]+$/
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\dA-Za-z]{8,}$/
const MIN_CHARS = 5

export const RegisterSchema = z
	.object({
		firstName: z
			.string()
			.min(MIN_CHARS, `Su nombre debe tener al menos ${MIN_CHARS} caracteres`),
		lastName: z
			.string()
			.min(
				MIN_CHARS,
				`Su apellido debe tener al menos ${MIN_CHARS} caracteres`
			),
		email: z
			.string()
			.min(
				MIN_CHARS,
				`El correo electrónico debe tener al menos ${MIN_CHARS} caracteres`
			)
			.refine(
				value => EMAIL_REGEX.test(value),
				'Debe proporcionar un correo electrónico válido'
			),
		repeatEmail: z.string(),
		provinceId: z.string(),
		password: z
			.string()
			.refine(
				value => PASSWORD_REGEX.test(value),
				'La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula y un número'
			),
		confirmPassword: z.string(),
		idCity: z.number(),
		province: z.string()
	})
	.refine(data => data.password === data.confirmPassword, {
		message: 'Las contraseñas deben coincidir',
		path: ['confirmPassword']
	})
	.refine(data => data.email === data.repeatEmail, {
		message: 'Los Mails deben coincidir',
		path: ['repeatEmail']
	})

export type RegisterSchemaType = z.infer<typeof RegisterSchema>
