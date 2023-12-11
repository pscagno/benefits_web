/* eslint-disable no-console */
import { zodResolver } from '@hookform/resolvers/zod'
import { memo } from 'react'
import {
	FormProvider,
	useForm,
	type FieldValues,
	type SubmitHandler
} from 'react-hook-form'

import { preferences, provinceOptions, regionOptions } from 'Utils/options'
import Button from 'components/Button'
import CheckboxInput from 'components/CheckboxInput'
import InputForm from 'components/InputForm'
import InputFormPassword from 'components/InputFormPassword'
import Select from 'components/Select'

import { RegisterSchema } from './schema'

const onSubmit: SubmitHandler<FieldValues> = data => {
	console.log('Submit!')
	console.log(data)
}

function RegisterForm() {
	const formMethods = useForm({
		mode: 'onBlur',
		resolver: zodResolver(RegisterSchema)
	})

	const { handleSubmit } = formMethods

	return (
		<div className='shadow-box mb-16 mt-[-75px] min-h-[964px] w-[1076px] sm:w-[94%] md:w-[94%]'>
			<h1 className='custom-h1-a py-10'>Registro</h1>
			<FormProvider {...formMethods}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='mx-auto grid w-[80%] grid-cols-2 justify-center gap-3 sm:grid-cols-1 md:grid-cols-1'>
						<InputForm name='userName' placeholder='NOMBRE Y APELLIDO' />
						<InputForm name='email' placeholder='MAIL' />
						<InputFormPassword name='password' placeholder='CONTRASEÑA' />
						<InputFormPassword
							name='confirmPassword'
							placeholder='REPETIR CONTRASEÑA'
						/>
						<Select name='region' options={regionOptions} />
						<Select name='province' options={provinceOptions} />
					</div>
					<hr className='mx-auto mt-20 w-[50%] border-[1px] border-solid border-[#C4C4C4]' />
					<CheckboxInput
						gridCols='three'
						preferences={preferences}
						title='Mis Gustos'
					/>
					<div className='fcenter pb-16'>
						<Button
							paddingY='py-3'
							text='REGISTRATE'
							textSize='text-lg'
							type='submit'
						/>
					</div>
				</form>
			</FormProvider>
		</div>
	)
}

export default memo(RegisterForm)
