import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'
import { FormProvider, useForm, type SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import Button from 'components/Button'
import InputForm from 'components/InputForm'
import InputFormPassword from 'components/InputFormPassword'

import type { LoginSchemaType } from './schema'
import { LoginSchema } from './schema'
import { useLoginUser, type LoginForm as LoginFormType } from './useLogin'

function LoginForm() {
	const navigate = useNavigate()
	const { mutate: loginUser } = useLoginUser()

	const formMethods = useForm<LoginSchemaType>({
		mode: 'onBlur',
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: 'pscacsngo@gmail.com',
			password: '123456'
		}
	})

	const { handleSubmit } = formMethods

	const onSubmit: SubmitHandler<LoginSchemaType> = useCallback(
		data => {
			const loginPayload: LoginFormType = {
				email: data.email,
				password: data.password
			}

			loginUser(loginPayload)
		},
		[loginUser]
	)

	const handleNavigate = useCallback(() => {
		navigate('/register')
	}, [navigate])

	return (
		<div className='shadow-box mb-16 mt-[-75px] min-h-[628px] w-[636px] sm:w-[90%]'>
			<h1 className='custom-h1-a py-10 sm:text-[38px]'>Inicio de sesión</h1>
			<FormProvider {...formMethods}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='fcol mx-auto w-[90%] gap-5'>
						<InputForm name='email' placeholder='EMAIL' />
						<InputFormPassword name='password' placeholder='CONTRASEÑA' />
						<div className='fcenter fcol'>
							<a
								className='mb-6 font-TitilliumWeb text-sm font-semibold text-primary hover:underline'
								href='/recovery'
							>
								Olvidé mi contraseña
							</a>
							<Button
								paddingY='py-3'
								text='INGRESAR'
								textSize='text-lg'
								type='submit'
								width='w-[184px]'
							/>
						</div>
					</div>
				</form>
			</FormProvider>
			<hr className='mx-auto mb-8 mt-10 w-[90%] border-neutral-300' />

			<h2 className='mb-6 px-[10%] text-center font-TitilliumWeb text-[22px] font-semibold text-primary'>
				Si aún no tenés cuenta puedes registrarte
			</h2>
			<div className='fcenter pb-10'>
				<Button
					onClick={handleNavigate}
					paddingY='py-3'
					text='REGISTRATE'
					textSize='text-lg'
					type='button'
					width='w-[184px]'
				/>
			</div>
		</div>
	)
}

export default LoginForm
