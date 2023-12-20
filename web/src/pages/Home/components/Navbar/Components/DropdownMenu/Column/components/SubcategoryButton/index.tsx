import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import '../../styles.css'
import type { Props } from './types'

function SubcategoryButton({ subcategory, setOpenMenu, category }: Props) {
	const navigate = useNavigate()

	const handleNavigateToSubCategory = useCallback(() => {
		setOpenMenu(previousOpenState => !previousOpenState)
		navigate(`/category/${category.id}/subcategory/${subcategory.id}`)
	}, [setOpenMenu, navigate, subcategory.name])

	return (
		<button
			className='category-name ml-[72px] flex h-[50px] items-center font-TitilliumWeb text-[1.875rem] leading-[75px] text-white sm:ml-[32px] sm:h-[32px] sm:text-[1.125rem] sm:text-lg sm:font-semibold sm:leading-[30px]'
			onClick={handleNavigateToSubCategory}
			type='button'
		>
			{subcategory.name}
		</button>
	)
}

export default memo(SubcategoryButton)
