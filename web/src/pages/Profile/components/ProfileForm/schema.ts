import { z } from 'zod'

const EMAIL_REGEX = /^[\w!#$%&'+./=?^`{|}~-]+@[\dA-Za-z-]+.[\dA-Za-z-]+$/
const MIN_CHARS = 5

export const ProfileSchema = z.object({
	userName: z
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
	region: z.string(),
	province: z.string(),
	preferences: z.object({
		salud: z.boolean(),
		balance: z.boolean(),
		gastronomia: z.boolean(),
		campanas: z.boolean(),
		celebraciones: z.boolean(),
		productosBancarios: z.boolean(),
		alianzas: z.boolean(),
		sorteos: z.boolean()
	})
})

export type ProfileSchemaType = z.infer<typeof ProfileSchema>
