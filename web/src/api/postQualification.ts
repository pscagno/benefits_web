import { useMutation, useQueryClient } from '@tanstack/react-query'

// import { GET_BENEFIT_BY_ID } from 'pages/BenefitDetail/useGetBenefitById'
import type { QualificationPayload } from 'types/qualificationPayload'

import api from './axios'

interface Props {
	index: number
	benefitId: number
}

const postQualification = async ({ index, benefitId }: Props) => {
	const qualificationPayload = {
		stars: index + 1,
		comments: '',
		benefit: {
			id: benefitId
		}
	}

	void api.post<QualificationPayload>(
		'/benefitQualification',
		qualificationPayload
	)
}

const usePostQualification = () => {
	const queryClient = useQueryClient()

	const onSuccess = () => {
		const GET_BENEFIT_BY_ID = `GET_BENEFIT_BY_ID_${id}`
		void queryClient.refetchQueries([GET_BENEFIT_BY_ID])
		console.log('Success postQualification')
	}

	return useMutation(postQualification, {
		onSuccess
	})
}

export default usePostQualification
