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
import InputForm from 'components/InputForm'

import { RecoverySchema } from './schema'

const onSubmit: SubmitHandler<FieldValues> = data => {
	console.log('Submit!')
	console.log(data)
}

function RecoveryForm() {
	const formMethods = useForm({
		mode: 'onBlur',
		resolver: zodResolver(RecoverySchema)
	})

	const { handleSubmit } = formMethods

	return (
		<div className='shadow-box mb-16 mt-[-75px] w-[636px] sm:w-[90%]'>
			<h1 className='custom-h1-a px-4 py-10 sm:pb-8 sm:text-[34px] sm:leading-10'>
				Reestablecer contraseña
			</h1>
			<h2 className='mb-6 px-[5%] text-left font-TitilliumWeb text-[22px] font-semibold text-primary sm:text-[18px]'>
				Ingrese el mail asociado a la cuenta y le enviaremos un correo con
				intrucciones para poder reestablecerla:
			</h2>
			<FormProvider {...formMethods}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='fcol mx-auto w-[90%] gap-5'>
						<InputForm name='email' placeholder='EMAIL' />
						<div className='fcenter fcol mb-12'>
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

export default RecoveryForm
