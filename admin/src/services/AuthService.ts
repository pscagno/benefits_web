import Cookies from 'js-cookie'

const TOKEN_KEY = 'token'

const saveTokenToCookie = (token: string) => {
	Cookies.set(TOKEN_KEY, token, { expires: 7 })
}

const getTokenFromCookie = () => {
	const tokenCookie = Cookies.get(TOKEN_KEY)

	return tokenCookie
}

const deleteTokenCookie = () => {
	Cookies.remove(TOKEN_KEY)
}

export { deleteTokenCookie, getTokenFromCookie, saveTokenToCookie }
