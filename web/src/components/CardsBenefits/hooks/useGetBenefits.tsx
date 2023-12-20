import { useInfiniteQuery } from '@tanstack/react-query'

import type { BenefitsCard } from '../../BenefitCard/types'
import type { GetBenefitsFunction } from './types'

function useGetBenefits(
	getBenefits: GetBenefitsFunction,
	keyQueryName: string,
	id?: number
) {
	const {
		isLoading,
		isError,
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage
	} = useInfiniteQuery<{
		nextCursor: number
		benefits: BenefitsCard[]
	}>([keyQueryName], async context => getBenefits(context, id), {
		getNextPageParam: lastPage => lastPage.nextCursor
	})
	const benefits = data?.pages.flatMap(page => page.benefits)

	return {
		benefitsIsLoading: isLoading,
		isError,
		benefitsResponse: benefits,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage
	}
}

export default useGetBenefits
