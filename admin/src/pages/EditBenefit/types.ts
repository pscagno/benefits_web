export interface BenefitFormData {
	userCreation: string
	title: string
	description: string
	text: string
	inHome: boolean // Changed to boolean as per TODO comment
	link: string
	subcategory: {
		id: number
	}
	imageHeader: File | null
	imageHeaderMobile: File | null
	imageLists: File | null
	imageDetails1: File | null
	imageDetails2?: File | null
}
