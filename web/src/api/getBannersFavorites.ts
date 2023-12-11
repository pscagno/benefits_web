/* eslint-disable @typescript-eslint/no-magic-numbers */
import ImageBannerFavorites from 'pages/Favorites/mock'

async function getBannerImages() {
	await new Promise(resolve => {
		setTimeout(resolve, 1500)
	})

	return ImageBannerFavorites
}

export default getBannerImages
