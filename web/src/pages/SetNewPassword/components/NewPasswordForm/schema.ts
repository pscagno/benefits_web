import { z } from 'zod'

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\dA-Za-z]{8,}$/

export const SetPasswordSchema = z
	.object({
		oldPassword: z
			.string()
			.refine(
				value => PASSWORD_REGEX.test(value),
				'La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula y un número'
			),
		// eslint-disable-next-line unicorn/no-keyword-prefix
		newPassword: z
			.string()
			.refine(
				value => PASSWORD_REGEX.test(value),
				'La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula y un número'
			),
		confirmNewPassword: z.string()
	})
	.refine(data => data.oldPassword !== data.newPassword, {
		message: 'Su nueva contraseña debe ser distinta a la anterior',
		path: ['newPassword']
	})
	.refine(data => data.newPassword === data.confirmNewPassword, {
		message: 'La confirmación de su nueva contraseña debe coincidir',
		path: ['confirmNewPassword']
	})

export type SetPasswordSchemaType = z.infer<typeof SetPasswordSchema>
