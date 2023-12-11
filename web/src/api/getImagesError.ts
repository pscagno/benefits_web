/* eslint-disable @typescript-eslint/no-magic-numbers */
import ImageError from 'pages/NotFound/mock'

async function getImagesError() {
	await new Promise(resolve => {
		setTimeout(resolve, 1500)
	})

	return ImageError
}

export default getImagesError
