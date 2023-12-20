export interface Category {
	id: number
	name: string
	orderInMenu: number
	color: string
	imageMenu: string
	subcategories?: [
		{
			id: number
			name: string
		}
	]
}
