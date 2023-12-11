/* eslint-disable no-alert */
import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import useMediaQuery from 'Utils/mediaQuery'
import HeartMenuIcon from 'assets/HeartMenuIcon/heartMenuIcon'
import HeartMenuIconMobile from 'assets/HeartMenuIconMobile'
import MacroIcon from 'assets/MacroIcon'
import MacroIconMobile from 'assets/MacroIconMobile'
import PowerIcon from 'assets/PowerIcon'
import ProfileIcon from 'assets/ProfileIcon'
import ProfileIconMobile from 'assets/ProfileIconMobile'
import Button from 'components/Button'

import ButtonBurger from './Components/ButtonBurger'

function Navbar() {
	const navigate = useNavigate()
	const location = useLocation()
	const mobile = useMediaQuery({ query: '(max-width: 768px)' })

	const handleNavigate = useCallback(
		(route: string) => {
			navigate(route)
		},
		[navigate]
	)

	return (
		<div className='fixed top-0 z-[999] h-[80px] w-full bg-white sm:h-[50px]'>
			<button
				className='absolute left-[41px] top-[px] flex h-full w-[166px] items-center justify-center sm:left-[17px] sm:w-auto'
				disabled={location.pathname === '/'}
				onClick={() => handleNavigate('/')}
				type='button'
			>
				{mobile ? <MacroIconMobile /> : <MacroIcon />}
			</button>
			<div className='flex h-full w-full flex-row items-center justify-end gap-6'>
				{location.pathname === '/register' && (
					<Button onClick={() => handleNavigate('/login')} text='LOGIN' />
				)}
				{location.pathname === '/login' && (
					<Button onClick={() => handleNavigate('/register')} text='REGISTRO' />
				)}
				<button
					disabled={location.pathname === '/favorites'}
					onClick={() => handleNavigate('/favorites')}
					type='button'
				>
					{' '}
					{/* falta icono si no tiene favoritos */}
					{mobile ? <HeartMenuIconMobile /> : <HeartMenuIcon />}
				</button>
				<button
					className='top-[21px] flex h-[37px] flex-row items-center gap-3'
					disabled={location.pathname === '/user/:id'}
					onClick={() => handleNavigate('/user/1')}
					type='button'
				>
					{mobile ? <ProfileIconMobile /> : <ProfileIcon />}
					<p className='font-TitilliumWeb text-[15px] font-semibold text-primary sm:hidden'>
						Alejandro
					</p>
				</button>
				{location.pathname !== '/register' &&
					location.pathname !== '/login' && (
						<button
							className='top-[21px] h-[37px] sm:hidden'
							onClick={() => alert('Esta seguro de cerrar sesion?')} // TODO
							type='button'
						>
							<PowerIcon />
						</button>
					)}
				<ButtonBurger />
			</div>
		</div>
	)
}

export default Navbar
