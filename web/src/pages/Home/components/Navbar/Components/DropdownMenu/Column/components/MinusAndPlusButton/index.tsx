import { memo, useCallback } from 'react'

import useMediaQuery from 'Utils/mediaQuery'
import MinusIcon from 'assets/MinusIcon'
import MinusIconMobile from 'assets/MinusIconMobile'
import PlusIcon from 'assets/PlusIcon'
import PlusIconMobile from 'assets/PlusIconMobile'

import type { Props } from './types'

function MinusAndPlusButton({
	category,
	categoryExpanded,
	setCategoryExpanded
}: Props) {
	const mobile = useMediaQuery({ query: '(max-width: 768px)' })
	const iconMinus = mobile ? <MinusIconMobile /> : <MinusIcon />
	const iconPlus = mobile ? <PlusIconMobile /> : <PlusIcon />

	const handleExpandedCategoryClick = useCallback(() => {
		if (categoryExpanded === category.id) {
			setCategoryExpanded(0)
		} else {
			setCategoryExpanded(category.id)
		}
	}, [category.id, categoryExpanded, setCategoryExpanded])

	return (
		<button
			className='relative h-[22px] w-[22px] sm:h-[16px] sm:w-[16px]'
			onClick={handleExpandedCategoryClick}
			type='button'
		>
			{category.subcategories.length > 0 && (
				<div className='left-[-8px] top-[-8px] flex h-[30px] w-[30px] items-center justify-center rounded-sm border-2 border-rose-500 bg-zinc-300 bg-opacity-0 sm:h-[24px] sm:w-[24px]'>
					{categoryExpanded === category.id ? iconMinus : iconPlus}
				</div>
			)}
		</button>
	)
}

export default memo(MinusAndPlusButton)
