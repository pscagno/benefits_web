import { memo } from 'react'

import SearchIcon from 'assets/SearchIcon'

function InputSearch({
	register,
	name,
	placeholder
}: {
	name: string
	placeholder: string
	register: any
}) {
	return (
		<div className='flex w-auto justify-center'>
			<div className='relative w-[100%] border border-neutral-300 bg-white'>
				<input
					className='h-[60px] w-[636px] border border-neutral-300 bg-white pl-4 font-sans text-lg font-semibold text-indigo-950 sm:w-[90%]'
					id={name}
					placeholder={placeholder}
					type='text'
					{...register('searchInput')}
				/>
				<div className='absolute right-4 top-1/2 -translate-y-1/2 transform'>
					<SearchIcon />
				</div>
			</div>
			{/* {errors.searchInput && (
				<span className='error'>
					* {errors.searchInput?.message?.toString()}
				</span>
			)} */}
		</div>
	)
}

export default memo(InputSearch)
