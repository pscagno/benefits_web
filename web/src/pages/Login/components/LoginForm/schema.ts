import { z } from 'zod'

const EMAIL_REGEX = /^[\w!#$%&'+./=?^`{|}~-]+@[\dA-Za-z-]+.[\dA-Za-z-]+$/
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\dA-Za-z]{8,}$/
const MIN_CHARS = 5

export const LoginSchema = z.object({
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
	password: z
		.string()
		.refine(
			value => PASSWORD_REGEX.test(value),
			'La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula y un número'
		)
})

export type LoginSchemaType = z.infer<typeof LoginSchema>
