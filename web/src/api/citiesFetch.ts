import type { City } from 'hooks/useGetCities/useGetCities'

import api from './axios'

const citiesFetch = async () => api.get<City[]>('/city')

export default citiesFetch
