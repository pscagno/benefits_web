import api from 'api/axios'
import type { Benefit } from 'types/benefit'

export default async function getBenefitById(id: number) {
	const response = await api.get<Benefit>(`/benefit/${id}`)
	return response.data
}
