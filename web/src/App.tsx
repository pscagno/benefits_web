import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import LoadingOrError from 'components/LoadingOrError/LoadingOrError'
import Navbar from 'pages/Home/components/Navbar'

const Home = lazy(async () => import('pages/Home'))
const BenefitDetail = lazy(async () => import('pages/BenefitDetail'))
const CategoryDetail = lazy(async () => import('pages/CategoryDetail'))
const Profile = lazy(async () => import('pages/Profile'))
const Login = lazy(async () => import('pages/Login'))
const Favorites = lazy(async () => import('pages/Favorites'))
const NotFound = lazy(async () => import('pages/NotFound'))
const Register = lazy(async () => import('pages/Register'))
const RecoveryPassword = lazy(async () => import('pages/RecoveryPassword'))
const SetNewPassword = lazy(async () => import('pages/SetNewPassword'))

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />}>
				<Navbar />
				<Routes>
					<Route element={<Home />} path='/' />
					<Route element={<Login />} path='login' />
					<Route element={<BenefitDetail />} path='/benefit/:id' />
					<Route element={<CategoryDetail />} path='/category/:id' />
					<Route element={<Profile />} path='/user/:id' />
					<Route element={<Favorites />} path='favorites' />
					<Route element={<NotFound />} path='*' />
					<Route element={<Login />} path='login' />
					<Route element={<Favorites />} path='/user/favorites' />
					<Route element={<Register />} path='register' />
					<Route element={<RecoveryPassword />} path='recovery' />
					<Route element={<SetNewPassword />} path='setnewpassword' />
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
