/* eslint-disable @typescript-eslint/no-magic-numbers */
import ImagesBannersProfile from 'pages/Profile/mock'

async function getBannerImages() {
	await new Promise(resolve => {
		setTimeout(resolve, 1500)
	})
	return ImagesBannersProfile
}

export default getBannerImages
