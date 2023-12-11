import { useQueryClient } from '@tanstack/react-query'
import { useMemo, useState } from 'react'

import Column from './Column'
import dividerNumber from './constants'
import type { Props } from './types'

function DropdownMenu({ isOpen, setOpenMenu }: Props) {
	const queryClient = useQueryClient()
	const cachedDataCategories = queryClient.getQueryData(['filters'])

	const [categoryExpanded, setCategoryExpanded] = useState(0)

	const columnCount = useMemo(
		() => Math.ceil(cachedDataCategories.length / dividerNumber),
		[]
	)

	const leftColumn = useMemo(
		() => cachedDataCategories.slice(0, columnCount),
		[columnCount]
	)

	const rightColumn = useMemo(
		() => cachedDataCategories.slice(columnCount),
		[columnCount]
	)

	return (
		<div
			className={`fixed left-0 top-[80px] flex h-full w-full bg-[#003057] text-white sm:top-[50px] ${
				isOpen ? 'block' : 'hidden'
			}`}
		>
			<div className='flex w-[459px] flex-col items-start sm:block sm:pl-[18px] sm:pt-[25px] md:block md:pl-[57px] md:pt-[44px] lg:hidden xl:hidden lp:hidden'>
				{cachedDataCategories.map(category => (
					<Column
						category={category}
						categoryExpanded={categoryExpanded}
						key={category.id}
						setCategoryExpanded={setCategoryExpanded}
						setOpenMenu={setOpenMenu}
					/>
				))}
			</div>
			<div className='flex w-full pl-[114px] pt-[64px] sm:hidden md:hidden'>
				<div className='flex w-[459px] flex-col items-start'>
					{leftColumn.map(category => (
						<Column
							category={category}
							categoryExpanded={categoryExpanded}
							key={category.id}
							setCategoryExpanded={setCategoryExpanded}
							setOpenMenu={setOpenMenu}
						/>
					))}
				</div>
				<div className='flex w-[459px] flex-col items-start'>
					{rightColumn.map(category => (
						<Column
							category={category}
							categoryExpanded={categoryExpanded}
							key={category.id}
							setCategoryExpanded={setCategoryExpanded}
							setOpenMenu={setOpenMenu}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default DropdownMenu
