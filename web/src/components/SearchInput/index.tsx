import { memo, useCallback, useState } from 'react'

// import type { Props } from './types'

function SearchInput() {
	const [inputValue, setInputValue] = useState('')

	const onSearch = useCallback((text: React.ChangeEvent<HTMLInputElement>) => {
		const searchValue = text.target.value.toLowerCase()

		setInputValue(searchValue)
	}, [])

	return (
		<div className='flex w-full justify-center'>
			<input
				className='h-[60px] w-[636px] border border-neutral-300 bg-white pl-4 font-sans text-lg font-semibold text-indigo-950 sm:w-[90%]'
				id='Type'
				onChange={onSearch}
				placeholder='Buscar'
				value={inputValue}
			/>
		</div>
	)
}

export default memo(SearchInput)
