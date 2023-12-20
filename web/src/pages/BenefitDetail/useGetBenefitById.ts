import { useQuery } from '@tanstack/react-query'

import getBenefitById from 'api/getBenefitById'

export default function useGetBenefitById(id: number) {
	return useQuery([`GET_BENEFIT_BY_ID_${id}`], async () => getBenefitById(id), {
		select: data => data
	})
}
