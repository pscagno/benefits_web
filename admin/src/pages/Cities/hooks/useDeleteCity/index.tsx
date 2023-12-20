import { useMutation, useQueryClient } from '@tanstack/react-query'

import api from 'api/axios'
import { CITIES_FETCH } from 'hooks/useGetCities'

const deleteCity = async (id: number) => api.delete(`/city/${id}`)

const useDeleteCity = () => {
	const queryClient = useQueryClient()

	const onSuccess = async () => {
		await queryClient.refetchQueries([CITIES_FETCH])
	}

	return useMutation(deleteCity, {
		onSuccess
	})
}

export default useDeleteCity
