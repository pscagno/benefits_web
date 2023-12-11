import { memo, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Arrow from 'assets/Arrow'
import useMediaQuery from 'Utils/mediaQuery'

import type { Props } from './types'

function CategoryButton({ setOpenMenu, category }: Props) {
	const [isArrowVisible, setIsArrowVisible] = useState(false)
	const navigate = useNavigate()
	const mobile = useMediaQuery({ query: '(max-width: 768px)' })

	const handleNavigateToCategory = useCallback(() => {
		setOpenMenu(previousOpenState => !previousOpenState)
		navigate(`/${category.name}`)
	}, [setOpenMenu, navigate, category])

	const handleSetIsArrowVisibleOn = useCallback(() => {
		setIsArrowVisible(true)
	}, [])

	const handleSetIsArrowVisibleOff = useCallback(() => {
		setIsArrowVisible(false)
	}, [])

	return (
		<button
			className='flex flex-row items-center font-TitilliumWeb text-5xl font-semibold leading-[75px] text-white sm:text-2xl'
			onClick={handleNavigateToCategory}
			type='button'
		>
			{!mobile && (
				<Arrow styleArrow={isArrowVisible ? 'arrow-visible' : 'arrow-hidden'} />
			)}
			<p
				className='category-name'
				onMouseEnter={handleSetIsArrowVisibleOn}
				onMouseLeave={handleSetIsArrowVisibleOff}
			>
				{category.name}
			</p>
		</button>
	)
}

export default memo(CategoryButton)
