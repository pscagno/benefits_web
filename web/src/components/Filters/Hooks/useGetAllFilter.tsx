import { useQuery } from '@tanstack/react-query'

import getFilters from 'api/getFilter'

function useGetAllFilter() {
	const { isLoading, isError, error, data } = useQuery(['filters'], getFilters)

	return {
		filterResponseIsLoading: isLoading,
		isError,
		error,
		filtersResponse: data
	}
}

export default useGetAllFilter
