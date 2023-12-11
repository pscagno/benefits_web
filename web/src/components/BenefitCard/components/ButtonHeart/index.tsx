import { memo, useCallback, useState } from 'react'

import HeartFavorite from 'assets/heartFavorite/heartFavorite'

function ButtonHeart() {
	const [isSelected, setIsSelected] = useState(false)

	const handleSelectBenefit = useCallback(
		(event: React.MouseEvent<HTMLButtonElement>) => {
			event.stopPropagation()

			setIsSelected(previousSelected => !previousSelected)
		},
		[]
	)
	return (
		<button onClick={handleSelectBenefit} type='button'>
			<HeartFavorite isSelected={isSelected} />
		</button>
	)
}

export default memo(ButtonHeart)
