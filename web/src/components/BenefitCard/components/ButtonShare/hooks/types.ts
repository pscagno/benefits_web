export interface Benefit {
	id: number
	title: string
	description: string
	text: string
	inHome: boolean
	link: string
	qualification: number
	categoryColor: string
	categoryName: string
	subcategoryName: string
	imageList: string
	userFavorite: boolean
	region: string | null
	dateCreation: string
	dateExpiration: string | null
	userCreation: string
}

export interface Page {
	benefits: Benefit[]
	nextCursor: number
}

export interface OldData {
	pages: Page[]
	pageParams: number[]
}
