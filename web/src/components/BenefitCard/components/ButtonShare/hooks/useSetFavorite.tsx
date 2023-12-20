import { useMutation, useQueryClient } from '@tanstack/react-query'

import setFavorite from 'api/setFavorite'

import type { OldData } from './types'

function useSetFavorite(keyQueryName: string, id: number) {
	const queryClient = useQueryClient()

	return useMutation(setFavorite, {
		onSuccess: () => {
			const GET_BENEFIT_BY_ID = `GET_BENEFIT_BY_ID_${id}`
			void queryClient.refetchQueries([GET_BENEFIT_BY_ID])
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
									item.id === id ? { ...item, userFavorite: true } : item
								)
							}
						]
					}
				}
			)
		}
	})
}

export default useSetFavorite
