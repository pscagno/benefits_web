import { useMutation, useQueryClient } from '@tanstack/react-query'

import unsetFavorite from 'api/unsetFavorite'

import type { OldData } from './types'

function useUnsetFavorite(keyQueryName: string, id: number) {
	const queryClient = useQueryClient()
	const GET_BENEFIT_BY_ID = `GET_BENEFIT_BY_ID_${id}`
	void queryClient.refetchQueries([GET_BENEFIT_BY_ID])

	return useMutation(unsetFavorite, {
		onSuccess: () => {
			queryClient.setQueryData(
				[keyQueryName],
				(oldData: OldData | undefined) => {
					if (!oldData) {
						return oldData
					}

					return {
						...oldData,
						pages: [
							{
								...oldData.pages[0],
								benefits: oldData.pages[0].benefits.map(item =>
									item.id === id ? { ...item, userFavorite: false } : item
								)
							}
						]
					}
				}
			)
		}
	})
}

export default useUnsetFavorite
