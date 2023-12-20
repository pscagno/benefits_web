/* eslint-disable react/no-multi-comp */
import type { ReactElement } from 'react'
import { Suspense, lazy } from 'react'
import {
	Navigate,
	Outlet,
	RouterProvider,
	createBrowserRouter
} from 'react-router-dom'

import BannerLogin from 'components/BannerLogin'
import LoadingOrError from 'components/LoadingOrError/LoadingOrError'
import OurValues from 'components/OurValues'
import { useAuth } from 'context/AuthContext'
import Navbar from 'pages/Home/components/Navbar'

const Home = lazy(async () => import('pages/Home'))
const BenefitDetail = lazy(async () => import('pages/BenefitDetail'))
const CategoryDetail = lazy(async () => import('pages/CategoryDetail'))
const Profile = lazy(async () => import('pages/Profile'))
const Login = lazy(async () => import('pages/Login'))
const Favorites = lazy(async () => import('pages/Favorites'))
const Register = lazy(async () => import('pages/Register'))
const RecoveryPassword = lazy(async () => import('pages/RecoveryPassword'))
const SetNewPassword = lazy(async () => import('pages/SetNewPassword'))

function PrivateLayout() {
	return (
		<>
			<Navbar />
			<Suspense fallback={<LoadingOrError />}>
				<Outlet />
			</Suspense>
			<OurValues />
			{/* <div className='w-50 min-h-[50px]' style={{height: 50 }}>FOOTER</div> */}
		</>
	)
}

function Layout() {
	return (
		<div className='mt-[81px] flex h-full w-full flex-col items-center bg-white'>
			<BannerLogin />
			<Suspense fallback={<LoadingOrError />}>
				<Outlet />
			</Suspense>
			<OurValues />
		</div>
	)
}

const privateRoutes = {
	element: <PrivateLayout />,
	children: [
		{ element: <Home />, path: '/' },
		{ element: <BenefitDetail />, path: '/benefit/:id' },
		{
			element: <CategoryDetail />,
			path: '/category/:id/subcategory/:subcategoryId'
		},
		{ element: <CategoryDetail />, path: '/category/:id' },
		{ element: <Profile />, path: '/user/:id' },
		{ element: <Favorites />, path: 'favorites' },
		{ path: '*', element: <Navigate to='/' replace /> }
	]
}

const routes = {
	element: <Layout />,
	children: [
		{ element: <Register />, path: '/register' },
		{ path: '*', element: <Navigate to='/register' replace /> }
	]
}

export default function App(): ReactElement {
	const { isAuthenticated } = useAuth()
	const router = createBrowserRouter([isAuthenticated ? privateRoutes : routes])

	return <RouterProvider router={router} />
}
