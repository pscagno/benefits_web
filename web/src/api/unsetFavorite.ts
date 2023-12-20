import api from './axios'

const unsetFavorite = async (id: number) => api.put(`benefit/unsetFav/${id}`)

export default unsetFavorite
