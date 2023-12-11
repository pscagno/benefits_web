import BannerLogin from 'components/BannerLogin'
import OurValues from 'components/OurValues'

import RegisterForm from './components/RegisterForm'

function Login() {
	return (
		<div className='mt-[81px] flex h-full w-full flex-col items-center bg-white'>
			<BannerLogin />
			<RegisterForm />
			<OurValues />
		</div>
	)
}

export default Login
