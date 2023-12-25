import { useFormContext } from 'react-hook-form'

import type { Preference } from 'types/preference'

import type { Props } from './types'

function CheckboxInput({ gridCols, title, preferences }: Props) {
	const { register } = useFormContext()
	return (
		<div className='h-full w-full'>
			<h1 className='pt-16 text-center font-TitilliumWeb text-3xl font-bold text-primary-description md:text-4xl lg:text-4xl xl:text-5xl lp:text-4xl'>
				{title}
			</h1>
			<div
				className={`mx-auto grid w-[80%] max-w-[1300px] gap-4 py-10 sm:pl-[15%] ${
					gridCols === 'four'
						? 'grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
						: 'grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
				}`}
			>
				{preferences.map((preference: Preference) => (
					<div className='mb-5 w-full' key={preference.id}>
						<label
							className='script overflow-hidden overflow-ellipsis whitespace-nowrap font-TitilliumWeb font-semibold text-primary-description'
							htmlFor={preference.id}
						>
							<input
								id={preference.id}
								type='checkbox'
								{...register(`preferences.${preference.id}`)}
							/>
							{preference.label}
							<span className='geekmark flex' />
						</label>
					</div>
				))}
			</div>
		</div>
	)
}

export default CheckboxInput
