import { useMemo, useState } from 'react'

import useGetAllFilter from 'components/Filters/hooks/useGetAllFilter'
import Loading from 'components/Loading/Loading'

import Column from './Column'
import dividerNumber from './constants'
import type { Props } from './types'

function DropdownMenu({ isOpen, setOpenMenu }: Props) {
	const { filterResponseIsLoading, filtersResponse } = useGetAllFilter()

	const [categoryExpanded, setCategoryExpanded] = useState(0)

	const columnCount = useMemo(
		() =>
			Math.ceil(filtersResponse ? filtersResponse.length / dividerNumber : 0),
		[filtersResponse]
	)

	const leftColumn = useMemo(
		() => (filtersResponse ? filtersResponse.slice(0, columnCount) : undefined),
		[columnCount, filtersResponse]
	)

	const rightColumn = useMemo(
		() => (filtersResponse ? filtersResponse.slice(columnCount) : undefined),
		[columnCount, filtersResponse]
	)

	if (filterResponseIsLoading) {
		return (
			<div className='flex justify-center'>
				<Loading />
			</div>
		)
	}

	return (
		<div
			className={`fixed left-0 top-[80px] flex h-full w-full bg-[#003057] text-white sm:top-[50px] ${
				isOpen ? 'block' : 'hidden'
			}`}
		>
			{filtersResponse?.length === 0 && (
				<h1 className='absolute left-10 top-10 text-center text-xl font-semibold text-[#fff]'>
					🚧 Aún no hay categorías disponibles! 🚧
				</h1>
			)}
			<div className='flex w-[459px] flex-col items-start sm:block sm:pl-[18px] sm:pt-[25px] md:block md:pl-[57px] md:pt-[44px] lg:hidden xl:hidden lp:hidden'>
				{filtersResponse?.map(category => (
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
					{leftColumn?.map(category => (
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
					{rightColumn?.map(category => (
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
