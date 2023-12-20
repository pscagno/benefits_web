import { useQuery } from '@tanstack/react-query'

import getFilters from 'api/getFilter'

function useGetAllFilter() {
	const {
		isLoading,
		isError,
		error,
		data: filtersResponse
	} = useQuery(['filters'], getFilters, {
		select: data => data.data
	})
	return {
		filterResponseIsLoading: isLoading,
		isError,
		error,
		filtersResponse
	}
}

export default useGetAllFilter
