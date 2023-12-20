import { useQuery } from '@tanstack/react-query'

import getBenefitsByCategory from 'api/getBenefitsByCategory'
import getBenefitsBySubcategory from 'api/getBenefitsBySubcategory'

const GET_BENEFITS_BY_CATEGORY = 'GET_BENEFITS_BY_CATEGORY'

interface Props {
	numberCategoryId: number
	numberSubcategoryId: number
	isSubcategory: boolean
}

export default function useGetBenefits({
	numberCategoryId,
	numberSubcategoryId,
	isSubcategory
}: Props) {
	return useQuery([GET_BENEFITS_BY_CATEGORY], async () => {
		if (isSubcategory) return getBenefitsBySubcategory(numberSubcategoryId)
		return getBenefitsByCategory(numberCategoryId)
	})
}
