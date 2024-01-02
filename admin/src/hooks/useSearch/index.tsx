import { TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import type { DataItem, SearchFields, UseSearchReturnType } from './types'

const useSearch = (
	data: DataItem[] | undefined,
	arrayToFilter: SearchFields[],
	placeHolderSearch: string
): UseSearchReturnType => {
	const [filteredDataHook, setFilteredDataHook] = useState<DataItem[]>([])

	const { register, setValue } = useForm()

	useEffect(() => {
		if (data) {
			setFilteredDataHook(data)
		}
	}, [data])

	const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const searchValue = event.target.value.toLowerCase()

		setValue('search', searchValue)

		const filteredData = data?.filter(item =>
			arrayToFilter.some(fieldName => {
				const fieldValue = item[fieldName]

				if (typeof fieldValue === 'number' && fieldName === 'id') {
					return fieldValue === Number(searchValue)
				}

				if (fieldValue && typeof fieldValue === 'string') {
					const fieldValueLower = fieldValue.toLowerCase()
					return fieldValueLower.includes(searchValue)
				}

				if (
					typeof fieldValue === 'object' &&
					fieldName === 'province' &&
					fieldValue.name
				) {
					const provinceName = fieldValue.name.toLowerCase()
					return provinceName.includes(searchValue)
				}

				return false
			})
		)

		setFilteredDataHook(filteredData ?? [])
	}

	const SearchInput = (
		<div className='my-4 ml-2'>
			<TextField
				className='max-w-[700px]'
				id='outlined-search'
				placeholder={placeHolderSearch}
				fullWidth
				{...register('search')}
				onChange={onSearch}
			/>
		</div>
	)

	return { filteredDataHook, SearchInput }
}

export default useSearch
