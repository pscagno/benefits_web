/* eslint-disable no-console */
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useMemo } from 'react'
import {
	FormProvider,
	useForm,
	type FieldValues,
	type SubmitHandler
} from 'react-hook-form'

import PencilIcon from 'assets/PencilIcon'
import Button from 'components/Button'
import CheckboxInput from 'components/CheckboxInput'
import InputForm from 'components/InputForm'
import Select from 'components/Select'
import type { City } from 'hooks/useGetCities/useGetCities'

import { ProfileSchema } from './schema'
import type { FormValues, ProfileFormProps } from './types'

const onSubmit: SubmitHandler<FieldValues> = data => {
	console.log(data)
}
function filterItemsByProvince(data: City[], targetProvinceId: number) {
  const filteredItems: { value: number; label: string }[] = [];

  for (const item of data) {
    const { id, name, province } = item;
    const { id: provinceId } = province;

    if (provinceId === targetProvinceId) {
      filteredItems.push({ value: id, label: name });
    }
  }

  return filteredItems;
}

function ProfileForm({
	cities,
	provinces,
	userProfile,
	categories
}: ProfileFormProps) {
	const formMethods = useForm<FormValues>({
		mode: 'onBlur',
		resolver: zodResolver(ProfileSchema),
		defaultValues: {
			provinceId: 1, // Establece el valor predeterminado de la provincia si es necesario
			...userProfile
		}
	})	

	const { handleSubmit, watch, setValue } = formMethods
  const watchProvinceId = watch('provinceId');

  useEffect(() => {
    setValue('cityId', null);
  }, [watchProvinceId, setValue]);

  const provincesOptions: { value: number; label: string }[] = useMemo(
    () =>
      provinces
        ? provinces.map((province) => ({
            value: province.id,
            label: province.name,
          }))
        : [],
    [provinces]
  );

  const citiesOptions: { value: number; label: string }[] = useMemo(
    () =>
      cities ? filterItemsByProvince(cities, Number(watchProvinceId)) : [],
    [cities, watchProvinceId]
  );

	useEffect(() => {
    if (watchProvinceId !== undefined) {
      setValue('cityId', cities ? filterItemsByProvince(cities, Number(watchProvinceId))[0]?.value : null);
    }
  }, [watchProvinceId, cities, setValue]);

	const categoriesOptions: { value: number; label: string }[] = useMemo(
		() =>
			categories
				? categories.map(category => ({
						value: category.id,
						label: category.name
				  }))
				: [],
		[categories]
	)

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
								<InputForm icon={<PencilIcon />} name='name' />
								<InputForm icon={<PencilIcon />} name='email' />
							</div>
							<h1 className='my-8 text-center font-TitilliumWeb text-3xl font-bold text-primary-description md:my-14 md:text-4xl lg:my-14 lg:text-4xl xl:my-14 xl:text-5xl lp:my-14 lp:text-4xl'>
								Mi región
							</h1>
							<div className='flex flex-row justify-center gap-3 sm:flex-col'>
							<Select name='provinceId' options={provincesOptions} />
							<Select
								disabled={!watchProvinceId || citiesOptions.length === 0}
								name='cityId'
								options={citiesOptions}
							/>  
							</div>
						</section>
						<section className='mt-10 h-full w-full bg-[#F0F0F0]'>
							<CheckboxInput
								gridCols='four'
								preferences={categoriesOptions}
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
