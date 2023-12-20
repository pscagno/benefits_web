import { z } from 'zod'

const EMAIL_REGEX = /^[\w!#$%&'+./=?^`{|}~-]+@[\dA-Za-z-]+.[\dA-Za-z-]+$/
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
	password: z.string()
})

export type LoginSchemaType = z.infer<typeof LoginSchema>
