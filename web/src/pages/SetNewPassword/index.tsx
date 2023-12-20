/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import { zodResolver } from '@hookform/resolvers/zod'
import {
	FormProvider,
	useForm,
	type FieldValues,
	type SubmitHandler
} from 'react-hook-form'

import Button from 'components/Button'
import InputFormPassword from 'components/InputFormPassword'

import { SetPasswordSchema } from './schema'

const onSubmit: SubmitHandler<FieldValues> = data => {
	console.log('Submit!')
	console.log(data)
}

function NewPasswordForm() {
	const formMethods = useForm({
		mode: 'onBlur',
		resolver: zodResolver(SetPasswordSchema)
	})

	const { handleSubmit } = formMethods

	return (
		<div className='shadow-box mb-16 mt-[-75px] w-[636px] sm:w-[90%]'>
			<h1 className='custom-h1-a px-4 py-10 sm:pb-8 sm:text-[34px] sm:leading-10'>
				Modificar contraseña
			</h1>
			<h2 className='mb-6 px-[5%] text-left font-TitilliumWeb text-[22px] font-semibold text-primary sm:text-[18px]'>
				Ingrese su contraseña actual o la temporal recibida en su correo,
				seguido de su nueva contraseña:
			</h2>
			<FormProvider {...formMethods}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='fcol mx-auto w-[90%] gap-5'>
						<InputFormPassword
							name='oldPassword'
							placeholder='CONTRASEÑA ACTUAL / TEMPORAL'
						/>
						<hr className='mx-auto w-[50%] border-[1px] border-solid border-white' />
						<InputFormPassword
							name='newPassword'
							placeholder='NUEVA CONTRASEÑA'
						/>
						<InputFormPassword
							name='confirmNewPassword'
							placeholder='REPETIR SU NUEVA CONTRASEÑA'
						/>
						<div className='fcenter fcol mb-12 mt-5'>
							<Button
								paddingY='py-3'
								text='ENVIAR'
								textSize='text-lg'
								type='submit'
								width='w-[184px]'
							/>
						</div>
					</div>
				</form>
			</FormProvider>
		</div>
	)
}

export default NewPasswordForm
