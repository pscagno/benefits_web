import BannerLogin from 'components/BannerLogin'
import OurValues from 'components/OurValues'

import RecoveryForm from './components/RecoveryForm'

function RecoveryPassword() {
	return (
		<>
			<div className='mt-[81px] flex h-full w-full flex-col items-center bg-white'>
				<BannerLogin />
				<RecoveryForm />
				<OurValues />
			</div>
			<hr />
		</>
	)
}

export default RecoveryPassword
