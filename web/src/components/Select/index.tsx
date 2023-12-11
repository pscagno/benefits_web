import { useFormContext } from 'react-hook-form'

import ArrowSelect from 'assets/ArrowSelect/ArrowSelect'

import type { Props } from './types'

function Select({ name, options }: Props) {
	const { register } = useFormContext()

	return (
		<div className='h-full w-full'>
			<div className='relative w-full border border-neutral-300'>
				<select
					className='h-[60px] w-full cursor-pointer overflow-hidden overflow-ellipsis whitespace-nowrap border-none bg-none pl-4 font-sans text-lg font-semibold text-indigo-950 placeholder:border-none'
					id={name}
					{...register(name)}
				>
					{options.map(option => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
				<div
					className='absolute right-4 top-1/2 -translate-y-1/2 transform'
					style={{ pointerEvents: 'none' }}
				>
					<ArrowSelect />
				</div>
			</div>
		</div>
	)
}

export default Select
