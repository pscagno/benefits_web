// import type { ReactElement } from 'react';
// import { lazy, Suspense } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import LoadingOrError from 'components/LoadingOrError';

// import PersistentDrawerLeft from './components/Drawer';

/* eslint-disable react/no-multi-comp */
import type { ReactElement } from 'react'
import { Suspense, lazy } from 'react'
import {
	Navigate,
	Outlet,
	RouterProvider,
	createBrowserRouter
} from 'react-router-dom'

import ErrorMessage from 'components/ErrorMessage'
import { useAuth } from 'context/AuthContext'

import PersistentDrawerLeft from './components/Drawer'

const BenefitsPage = lazy(async () => import('pages/Benefits'))
const AddBenefitPage = lazy(async () => import('pages/AddBenefit'))
const CategoriasPage = lazy(async () => import('pages/Categories'))
const AddCategoryPage = lazy(async () => import('pages/AddCategory'))
const SubcategoryPage = lazy(async () => import('pages/Subcategories'))
const AddSubcategoryPage = lazy(async () => import('pages/AddSubcategory'))
const ProvincesPage = lazy(async () => import('pages/Provinces'))
const AddProvincePage = lazy(async () => import('pages/AddProvince'))
const CitiesPage = lazy(async () => import('pages/Cities'))
const AddCityPage = lazy(async () => import('pages/AddCity'))
const LoginPage = lazy(async () => import('pages/Login'))

function PrivateLayout() {
	return (
		<>
			<PersistentDrawerLeft />
			<Suspense fallback={<ErrorMessage message='Ocurrió un error' />}>
				<Outlet />
			</Suspense>
		</>
	)
}

function Layout() {
	return (
		<div className='mt-[81px] flex h-full w-full flex-col items-center bg-white'>
			<Suspense fallback={<ErrorMessage message='Ocurrió un error' />}>
				<Outlet />
			</Suspense>
		</div>
	)
}

const privateRoutes = {
	element: <PrivateLayout />,
	children: [
		{ element: <BenefitsPage />, path: '/benefits' },
		{ element: <AddBenefitPage />, path: '/benefits/add' },
		{ element: <CategoriasPage />, path: '/categories' },
		{ element: <AddCategoryPage />, path: '/categories/add' },
		{ element: <SubcategoryPage />, path: '/subcategories' },
		{ element: <AddSubcategoryPage />, path: '/subcategories/add' },
		{ element: <ProvincesPage />, path: '/provinces' },
		{ element: <AddProvincePage />, path: '/provinces/add' },
		{ element: <CitiesPage />, path: '/cities' },
		{ element: <AddCityPage />, path: '/cities/add' },
		{ path: '*', element: <Navigate to='/benefits' replace /> }
	]
}

const routes = {
	element: <Layout />,
	children: [
		{ element: <LoginPage />, path: '/login' },
		{ path: '*', element: <Navigate to='/login' replace /> }
	]
}

export default function App(): ReactElement {
	const { isAuthenticated } = useAuth()
	const router = createBrowserRouter([isAuthenticated ? privateRoutes : routes])

	return <RouterProvider router={router} />
}
