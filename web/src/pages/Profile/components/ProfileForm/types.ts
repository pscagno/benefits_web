export interface CityProps {
	id: number
	name: string
	province: ProvinceProps
}

export interface ProvinceProps {
	id: number
	name: string
}

export interface UserProfileProps {
	id: number
	name: string
	email: string
}

export interface CategoryProps {
	id: number
	name: string
}

export interface ProfileFormProps {
	cities: CityProps[]
	provinces: ProvinceProps[]
	userProfile: UserProfileProps
	categories: CategoryProps[]
}
export interface FormValues {
	name: string
	email: string
	provinceId: string
	idCity: string
}
