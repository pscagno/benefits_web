import type { ReactNode } from 'react'
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState
} from 'react'

import { addBearerToken, removeHeadersAuthorization } from 'api/axios'
import {
	deleteTokenCookie,
	getTokenFromCookie,
	saveTokenToCookie
} from 'services/AuthService'

interface AuthContextProps {
	isAuthenticated: boolean
	login: (token: string) => void
	logout: () => void
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

interface AuthProviderProps {
	children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
	const [isAuthenticated, setIsAuthenticated] = useState(
		() => !!getTokenFromCookie()
	)

	useEffect(() => {
		const token = getTokenFromCookie()

		if (token) {
			addBearerToken(token)
		}
	}, [])

	const login = useCallback((token: string) => {
		saveTokenToCookie(token)
		addBearerToken(token)
		setIsAuthenticated(true)
	}, [])

	const logout = useCallback(() => {
		removeHeadersAuthorization()
		deleteTokenCookie()
		setIsAuthenticated(false)
	}, [])

	const value = useMemo(
		() => ({
			isAuthenticated,
			login,
			logout
		}),
		[isAuthenticated, login, logout]
	)

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextProps => {
	const context = useContext(AuthContext)

	if (!context) {
		throw new Error('useAuth debe ser utilizado dentro de un AuthProvider')
	}
	return context
}
