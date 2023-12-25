import { memo } from 'react'
import { useForm } from 'react-hook-form'

import SearchIcon from 'assets/SearchIcon'

function InputSearch({
	handleSearch,
	name,
	placeholder
}: {
	name: string
	placeholder: string
	register: any
	handleSearch: () => void
}) {
	const { register, watch } = useForm({})
	const search = watch(name)

	const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			handleSearch(search)
		}
	}

	return (
		<div className='flex w-auto justify-center'>
			<div className='relative w-[100%] border border-neutral-300 bg-white'>
				<input
					className='h-[60px] w-[636px] border border-neutral-300 bg-white pl-4 font-sans text-lg font-semibold text-indigo-950 sm:w-[100%]'
					id={name}
					placeholder={placeholder}
					type='text'
					{...register(name)}
					onKeyDown={onKeyPress}
				/>
				<div className='absolute right-4 top-1/2 -translate-y-1/2 transform'>
					<button onClick={() => handleSearch(search)} type='button'>
						<SearchIcon />
					</button>
				</div>
			</div>
		</div>
	)
}

export default memo(InputSearch)
