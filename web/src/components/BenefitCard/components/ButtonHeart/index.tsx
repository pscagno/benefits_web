import { memo, useCallback } from 'react'

import HeartFavorite from 'assets/heartFavorite/heartFavorite'

import useSetFavorite from '../ButtonShare/hooks/useSetFavorite'
import useUnsetFavorite from '../ButtonShare/hooks/useUnsetFavorite'
import type { Props } from './types'

function ButtonHeart({ id, userFavorite, keyQueryName }: Props) {
	const { mutate: setFavorite } = useSetFavorite(keyQueryName, id)
	const { mutate: unsetFavorite } = useUnsetFavorite(keyQueryName, id)

	const handleSelectBenefit = useCallback(
		(event: React.MouseEvent<HTMLButtonElement>) => {
			event.stopPropagation()
			if (userFavorite) {
				unsetFavorite(id)
			} else {
				setFavorite(id)
			}
		},
		[id, setFavorite, unsetFavorite, userFavorite]
	)
	return (
		<button onClick={handleSelectBenefit} type='button'>
			<HeartFavorite isSelected={userFavorite} />
		</button>
	)
}

export default memo(ButtonHeart)
