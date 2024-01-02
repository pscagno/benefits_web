/* eslint-disable react/no-multi-comp */
import type { ReactElement } from 'react'
import { Suspense, lazy } from 'react'
import {
	Navigate,
	Outlet,
	RouterProvider,
	createBrowserRouter
} from 'react-router-dom'

import CustomSnackbar from 'components/CustomSnackbar'
import PersistentDrawerLeft from 'components/Drawer'
import ErrorMessage from 'components/ErrorMessage'
import { useAuth } from 'context/AuthContext'
import { useMultipleNotificationContext } from 'context/MultipleNotificationContext'

const BenefitsPage = lazy(async () => import('pages/Benefits'))
const AddBenefitPage = lazy(async () => import('pages/AddBenefit'))
const CategoriasPage = lazy(async () => import('pages/Categories'))
const UsersPage = lazy(async () => import('pages/Users'))
const UsageReportPage = lazy(async () => import('pages/UsageReport'))
const RatingReportPage = lazy(async () => import('pages/RatingReport'))
const AddCategoryPage = lazy(async () => import('pages/AddCategory'))
const SubcategoryPage = lazy(async () => import('pages/Subcategories'))
const AddSubcategoryPage = lazy(async () => import('pages/AddSubcategory'))
const ProvincesPage = lazy(async () => import('pages/Provinces'))
const AddProvincePage = lazy(async () => import('pages/AddProvince'))
const CitiesPage = lazy(async () => import('pages/Cities'))
const AddCityPage = lazy(async () => import('pages/AddCity'))
const LoginPage = lazy(async () => import('pages/Login'))
const HomeCarouselPage = lazy(async () => import('pages/HomeCarousel'))
const AddHomeCarouselPage = lazy(async () => import('pages/AddHomeCarousel'))
const EditProvincePage = lazy(async () => import('pages/EditProvince'))
const EditCityPage = lazy(async () => import('pages/EditCity'))
const EditSubcategoryPage = lazy(async () => import('pages/EditSubcategory'))
const EditCategoryPage = lazy(async () => import('pages/EditCategory'))
const EditBenefitPage = lazy(async () => import('pages/EditBenefit'))

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
		{ element: <UsersPage />, path: '/users' },
		{ element: <UsageReportPage />, path: '/use-report' },
		{ element: <RatingReportPage />, path: '/qualifications-report' },
		{ element: <AddCategoryPage />, path: '/categories/add' },
		{ element: <SubcategoryPage />, path: '/subcategories' },
		{ element: <AddSubcategoryPage />, path: '/subcategories/add' },
		{ element: <ProvincesPage />, path: '/provinces' },
		{ element: <AddProvincePage />, path: '/provinces/add' },
		{ element: <CitiesPage />, path: '/cities' },
		{ element: <AddCityPage />, path: '/cities/add' },
		{ element: <HomeCarouselPage />, path: '/homecarousel' },
		{ element: <AddHomeCarouselPage />, path: '/homecarousel/add' },
		{ element: <EditProvincePage />, path: '/provinces/edit/:provinceId' },
		{ element: <EditCityPage />, path: '/cities/edit/:cityId' },
		{ element: <EditSubcategoryPage />, path: '/subcategories/edit/:subcategoryId' },
		{ element: <EditCategoryPage />, path: '/categories/edit/:categoryId' },
		{ element: <EditBenefitPage />, path: '/benefit/edit/:benefitId' },
		{
			element: <EditSubcategoryPage />,
			path: '/subcategories/edit/:subcategoryId'
		},
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
	const { notifications, removeNotification } = useMultipleNotificationContext()
	const { isAuthenticated } = useAuth()
	const router = createBrowserRouter([isAuthenticated ? privateRoutes : routes])

	return (
		<>
			{notifications.map((notification, index) => (
				<CustomSnackbar
					index={index}
					key={index}
					notification={notification}
					removeNotification={removeNotification}
				/>
			))}

			<RouterProvider router={router} />
		</>
	)
}
