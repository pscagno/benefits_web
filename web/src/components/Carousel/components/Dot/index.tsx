/* eslint-disable jsx-a11y/control-has-associated-label */
import { memo } from 'react'

import useMediaQuery from 'Utils/mediaQuery'

import styles from './styles'
import type { Props } from './types'

function Dot({ active, onClick }: Props) {
	const mobile = useMediaQuery({ query: '(max-width: 768px)' })

	const dotClass = active ? styles.activeDot : styles.dot
	const dotClassMobile = active ? styles.activeDotMobile : styles.dotMobile

	return (
		<div className='pb-[44px] sm:pb-[0px]'>
			<button
				onClick={onClick}
				style={mobile ? dotClassMobile : dotClass}
				type='button'
			/>
		</div>
	)
}

export default memo(Dot)
