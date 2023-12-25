import { memo, useCallback, useState } from 'react'

import HeartFavorite from 'assets/heartFavorite/heartFavorite'

import useSetFavorite from '../ButtonShare/hooks/useSetFavorite'
import useUnsetFavorite from '../ButtonShare/hooks/useUnsetFavorite'
import type { Props } from './types'

function ButtonHeart({ id, userFavorite, keyQueryName }: Props) {
	const { mutate: setFavorite } = useSetFavorite(keyQueryName, id)
	const { mutate: unsetFavorite } = useUnsetFavorite(keyQueryName, id)
	const [favoriteNew, setFavoriteNew] = useState(userFavorite || false)

	const handleSelectBenefit = useCallback(
		(event: React.MouseEvent<HTMLButtonElement>) => {
			event.stopPropagation()
			if (favoriteNew) {
				unsetFavorite(id)
				setFavoriteNew(previous => !previous)
			} else {
				setFavoriteNew(previous => !previous)
				setFavorite(id)
			}
		},
		[id, setFavorite, unsetFavorite, favoriteNew]
	)
	return (
		<button onClick={handleSelectBenefit} type='button'>
			<HeartFavorite isSelected={favoriteNew} />
		</button>
	)
}

export default memo(ButtonHeart)
