import { memo } from 'react'

import PowerIcon from 'assets/PowerIcon'
import { useAuth } from 'context/AuthContext'

function LogoutButton() {
	const { logout } = useAuth()

	return (
		<button
			className='top-[21px] h-[37px] sm:hidden'
			onClick={logout}
			type='button'
		>
			<PowerIcon />
		</button>
	)
}

export default memo(LogoutButton)
