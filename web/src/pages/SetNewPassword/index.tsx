import BannerLogin from 'components/BannerLogin'
import OurValues from 'components/OurValues'

import NewPasswordForm from './components/NewPasswordForm'

function SetNewPassword() {
	return (
		<>
			<div className='mt-[81px] flex h-full w-full flex-col items-center bg-white'>
				<BannerLogin />
				<NewPasswordForm />
				<OurValues />
			</div>
			<hr />
		</>
	)
}

export default SetNewPassword
