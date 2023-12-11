/* eslint-disable @typescript-eslint/no-magic-numbers */
import BannerProfileImg from 'assets/images/Banner-Profile.png'
import BannerProfileMobile from 'assets/images/dashi-header-mobile.png'
// Estos son los datos que tiene dentro de un user la benefit card:
const incompleteUsers = [
	{
		id: 1,
		userName: 'Pablo',
		nationalId: '27026977', // Que es este dato?
		email: 'pscagno@gmail.com',
		password: '',
		verified: false,
		mustChangePassword: false,
		admin: false
	}
]

// Estos son necesarios. Los agrego yo a priori:
const users = [
	{
		...incompleteUsers[0],
		region: 'Norte',
		province: 'Buenos Aires',
		preferences: {
			salud: false,
			balance: false,
			gastronomia: false,
			campanas: false,
			celebraciones: false,
			productosBancarios: false,
			alianzas: false,
			sorteos: false
		}
	}
]

const ImagesBannersProfile = {
	image: BannerProfileImg,
	imageMobile: BannerProfileMobile,
	altImage: 'Image Banner',
	id: 1
}

export default { users, ImagesBannersProfile }
