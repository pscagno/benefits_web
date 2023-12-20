import { z } from 'zod'

const EMAIL_REGEX = /^[\w!#$%&'+./=?^`{|}~-]+@[\dA-Za-z-]+.[\dA-Za-z-]+$/
const MIN_CHARS = 5

export const UserProfileSchema = z.object({
	firstName: z
		.string()
		.min(MIN_CHARS, `Su nombre debe tener al menos ${MIN_CHARS} caracteres`),
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
	provinceId: z.string(),
	idCity: z.number(),
	province: z.string()
})

export type UserProfileSchemaType = z.infer<typeof UserProfileSchema>
