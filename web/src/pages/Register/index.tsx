import { memo, useCallback, useEffect, useMemo } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { FormProvider, useForm } from 'react-hook-form';

import Button from 'components/Button';
import CheckboxInput from 'components/CheckboxInput';
import InputForm from 'components/InputForm';
import Select from 'components/Select';
import { useGetCategories } from 'hooks/useGetCategories';

import type { RegisterSchemaType } from './schema';
import type { City } from './useGetCities';
import { useGetCities } from './useGetCities';
import { useGetProvinces } from './useGetProvinces';
import {
	useRegisterUser,
	type RegisterForm as RegisterFormType
} from './useRegisterUser';

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

function RegisterForm() {
  const { mutate: registerUser } = useRegisterUser();
  const { data: cities } = useGetCities();
  const { data: provinces } = useGetProvinces();
  const { data: categories } = useGetCategories();

  const formMethods = useForm<RegisterSchemaType>({
    // resolver: zodResolver(RegisterSchema),
    defaultValues: {
      provinceId: 1, // Establece el valor predeterminado de la provincia si es necesario
    },
  });


  const { handleSubmit, watch, setValue } = formMethods;
  const watchProvinceId = watch('provinceId');

  useEffect(() => {
    setValue('idCity', null);
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

  const onSubmit: SubmitHandler<RegisterSchemaType> = useCallback(
    (data) => {
      const registerPayload: RegisterFormType = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: '123456', // Supongo que esto es solo un placeholder
        idCity: data.idCity,
        categories: [],
      };

      registerUser(registerPayload);
    },
    [registerUser]
  );


	  useEffect(() => {
    // Esta lógica se ejecutará al montar el componente si `watchProvinceId` tiene un valor predeterminado.
    if (watchProvinceId !== undefined) {
      setValue('idCity', cities ? filterItemsByProvince(cities, Number(watchProvinceId))[0]?.value : null);
    }
  }, [watchProvinceId, cities, setValue]);

  return (
    <div className='shadow-box mb-16 mt-[-75px] min-h-[964px] w-[1076px] sm:w-[94%] md:w-[94%]'>
      <h1 className='custom-h1-a py-10'>Registro</h1>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mx-auto grid w-[80%] grid-cols-2 justify-center gap-3 sm:grid-cols-1 md:grid-cols-1'>
            <InputForm name='firstName' placeholder='NOMBRE' />
            <InputForm name='lastName' placeholder='APELLIDO' />
            <InputForm name='email' placeholder='MAIL' />
            <InputForm name='repeatEmail' placeholder='REPETIR MAIL' />
            <Select name='provinceId' options={provincesOptions} />
            <Select
              disabled={!watchProvinceId || citiesOptions.length === 0}
              name='idCity'
              options={citiesOptions}
            />          </div>
          <hr className='mx-auto mt-20 w-[50%] border-[1px] border-solid border-[#C4C4C4]' />
          {categories?.length > 0 && (
            <CheckboxInput
              gridCols='three'
              preferences={categories}
              title='Mis Gustos'
            />
          )}
          <div className='fcenter pb-16'>
            <Button paddingY='py-3' text='REGISTRATE' textSize='text-lg' />
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default memo(RegisterForm);
