import { memo, useCallback, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import CloseEyeIcon from 'assets/CloseEyeIcon'
import EyeIcon from 'assets/EyeIcon'

import type { PasswordProps } from './types'

function InputFormPassword({ name, placeholder }: PasswordProps) {
	const [showPassword, setShowPassword] = useState(false)

	const {
		formState: { errors },
		register
	} = useFormContext()

	const handleShowPassword = useCallback(() => {
		setShowPassword(previousState => !previousState)
	}, [])

	return (
		<div className='flex w-full flex-col'>
			<div className='relative w-[100%] border border-neutral-300 bg-white'>
				<input
					className='h-[60px] w-[100%] border-none pl-4 font-sans text-lg font-semibold text-indigo-950'
					id={name}
					placeholder={placeholder}
					type={showPassword ? 'text' : 'password'}
					{...register(name)}
				/>
				<button
					className='absolute right-4 top-1/2 -translate-y-1/2 transform'
					onClick={handleShowPassword}
					type='button'
				>
					{showPassword ? <CloseEyeIcon /> : <EyeIcon />}
				</button>
			</div>
			{errors[name] && (
				<span className='error'>* {errors[name]?.message?.toString()}</span>
			)}
		</div>
	)
}

export default memo(InputFormPassword)
