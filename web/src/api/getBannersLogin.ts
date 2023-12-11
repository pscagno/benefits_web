/* eslint-disable @typescript-eslint/no-magic-numbers */
import ImageBannersLogin from 'mock'

async function getBannersLogin() {
	await new Promise(resolve => {
		setTimeout(resolve, 1500)
	})

	return ImageBannersLogin
}

export default getBannersLogin
