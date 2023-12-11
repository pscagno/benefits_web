import { useQuery } from '@tanstack/react-query'

import getBannersLogin from 'api/getBannersLogin'
import BannerImage from 'components/BannerImage'
import Loading from 'components/Loading/Loading'
import OurValues from 'components/OurValues'

import LoginForm from './components/LoginForm'

function Login() {
	const { isLoading, error, data } = useQuery(
		['benefitsBanners'],
		getBannersLogin
	)

	if (isLoading) {
		return <Loading />
	}
	if (error) <p>No se pudieron cargar las imagenes...</p>

	return (
		<>
			<div className='mt-[81px] flex h-full w-full flex-col items-center bg-white'>
				<BannerImage
					altImage={data?.altImage}
					image={data?.image}
					imageMobile={data?.imageMobile}
				/>
				<LoginForm />
				<OurValues />
			</div>
			<hr />
		</>
	)
}

export default Login
