import { useFormContext } from 'react-hook-form'

import type { Props } from './types'

function InputForm({ icon, name, placeholder, type }: Props) {
	const {
		formState: { errors },
		register
	} = useFormContext()

	return (
		<div className='flex w-full flex-col'>
			<div className='relative w-[100%] border border-neutral-300 bg-white'>
				<input
					className='h-[60px] w-[100%] border-none pl-4 font-sans text-lg font-semibold text-indigo-950'
					id={name}
					placeholder={placeholder}
					type={type ?? 'text'}
					{...register(name)}
				/>
				<div className='absolute right-4 top-1/2 -translate-y-1/2 transform'>
					{icon}
				</div>
			</div>
			{errors[name] && (
				<span className='error'>* {errors[name]?.message?.toString()}</span>
			)}
		</div>
	)
}

export default InputForm
