import { useMutation, useQueryClient } from '@tanstack/react-query'

import api from 'api/axios'
import { SUB_CATEGORIES_KEY } from 'hooks/useGetSubCategories'

const deleteSubCategory = async (id: number) => api.delete(`/subcategory/${id}`)

const useDeleteSubCategory = () => {
	const queryClient = useQueryClient()

	const onSuccess = async () => {
		await queryClient.refetchQueries([SUB_CATEGORIES_KEY])
	}

	return useMutation(deleteSubCategory, {
		onSuccess
	})
}

export default useDeleteSubCategory
