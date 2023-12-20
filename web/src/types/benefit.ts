export interface Benefit {
	id: number
	title: string
	description: string
	text: string
	inHome: boolean
	categoryName: string
	categoryColor: string
	categoryId: number
	subcategoryName: string
	userCreation: string
	dateCreation: string
	dateExpiration: string | null
	userFavorite: boolean
	link: string
	region: string
	imageHeader: string
	imageHeaderMobile: string
	imageList: string
	imageDetails1: string
	imageDetails2: string
	qualification: number
	averageQualification: number
}
