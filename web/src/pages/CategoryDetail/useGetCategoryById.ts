import { useQuery } from '@tanstack/react-query'

import getCategoryById from 'api/getCategoryById'

export default function useGetCategoryById(id: number) {
	return useQuery(
		[`GET_BENEFIT_BY_ID_${id}`],
		async () => getCategoryById(id),
		{
			select: data => data
		}
	)
}
