import { useMutation, useQueryClient } from '@tanstack/react-query'

import setFavorite from 'api/setFavorite'

import type { OldData } from './types'

function useSetFavorite(keyQueryName: string, id: number) {
	const queryClient = useQueryClient()

	return useMutation(setFavorite, {
		onSuccess: () => {
			const GET_BENEFIT_BY_ID = `GET_BENEFIT_BY_ID_${id}`
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
							item.id === id ? { ...item, userFavorite: true } : item
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

export default useSetFavorite
