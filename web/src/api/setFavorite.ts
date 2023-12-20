import api from './axios'

const setFavorite = async (id: number) => api.put(`/benefit/setAsFav/${id}`)

export default setFavorite
