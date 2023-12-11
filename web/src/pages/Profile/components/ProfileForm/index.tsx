/* eslint-disable no-console */
import { zodResolver } from '@hookform/resolvers/zod'
import {
	FormProvider,
	useForm,
	type FieldValues,
	type SubmitHandler
} from 'react-hook-form'

import user from 'Utils/mockUser'
import { preferences, provinceOptions, regionOptions } from 'Utils/options'
import PencilIcon from 'assets/PencilIcon'
import Button from 'components/Button'
import CheckboxInput from 'components/CheckboxInput'
import InputForm from 'components/InputForm'
import Select from 'components/Select'

import { ProfileSchema } from './schema'

const onSubmit: SubmitHandler<FieldValues> = data => {
	console.log('Submittttt')
	console.log(data)
}

function ProfileForm() {
	const formMethods = useForm({
		mode: 'onBlur',
		resolver: zodResolver(ProfileSchema),
		defaultValues: {
			userName: user.userName,
			email: user.email,
			region: user.region,
			province: user.province,
			preferences: user.preferences
		}
	})

	const { handleSubmit } = formMethods

	return (
		<div className='flex w-full flex-col'>
			<div className='w-full justify-center'>
				<FormProvider {...formMethods}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<section className='mx-auto w-[80%] max-w-[1300px]'>
							<h1 className='my-8 text-center font-TitilliumWeb text-3xl font-bold text-primary-description md:my-14 md:text-4xl lg:my-14 lg:text-4xl xl:my-14 xl:text-5xl lp:my-14 lp:text-4xl'>
								Mis datos
							</h1>
							<div className='flex flex-row justify-center gap-3 sm:flex-col'>
								<InputForm icon={<PencilIcon />} name='userName' />
								<InputForm icon={<PencilIcon />} name='email' />
							</div>
							<h1 className='my-8 text-center font-TitilliumWeb text-3xl font-bold text-primary-description md:my-14 md:text-4xl lg:my-14 lg:text-4xl xl:my-14 xl:text-5xl lp:my-14 lp:text-4xl'>
								Mi región
							</h1>
							<div className='flex flex-row justify-center gap-3 sm:flex-col'>
								<Select name='region' options={regionOptions} />
								<Select name='province' options={provinceOptions} />
							</div>
						</section>
						<section className='mt-10 h-full w-full bg-[#F0F0F0]'>
							<CheckboxInput
								gridCols='four'
								preferences={preferences}
								title='Mis Gustos'
							/>
							<div className='fcenter pb-16'>
								<Button
									paddingY='py-3'
									text='APLICAR CAMBIOS'
									textSize='text-lg'
									type='submit'
								/>
							</div>
						</section>
					</form>
				</FormProvider>
			</div>
		</div>
	)
}

export default ProfileForm
