import { useMutation, useQueryClient } from '@tanstack/react-query'

import unsetFavorite from 'api/unsetFavorite'

import type { OldData } from './types'

function useUnsetFavorite(keyQueryName: string, id: number) {
	const queryClient = useQueryClient()
	const GET_BENEFIT_BY_ID = `GET_BENEFIT_BY_ID_${id}`

	return useMutation(unsetFavorite, {
		onSuccess: () => {
			void queryClient.refetchQueries([GET_BENEFIT_BY_ID])
			void queryClient.refetchQueries(['benefitsHome'])
			void queryClient.refetchQueries(['benefitsFav'])

			queryClient.setQueryData(
				[keyQueryName],
				(oldData: OldData | undefined) => {
					if (!oldData) {
						return oldData
					}

					const updatedPages = oldData.pages.map(page => ({
						...page,
						benefits: page.benefits.map(item =>
							item.id === id ? { ...item, userFavorite: false } : item
						)
					}))

					return {
						...oldData,
						pages: updatedPages
					}
				}
			)
		}
	})
}

export default useUnsetFavorite
