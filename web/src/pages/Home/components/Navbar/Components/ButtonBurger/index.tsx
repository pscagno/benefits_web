import { memo, useCallback, useState } from 'react'

import DropdownMenu from '../DropdownMenu'

function ButtonBurger() {
	const [openMenu, setOpenMenu] = useState(false)

	const handleMenu = useCallback(() => {
		setOpenMenu(previousState => !previousState)
	}, [])

	return (
		<div>
			{openMenu ? (
				<div>
					<DropdownMenu isOpen={openMenu} setOpenMenu={setOpenMenu} />
					<button
						className='relative flex h-20 w-20 items-center justify-center bg-primary sm:h-[50px] sm:w-[50px]'
						onClick={handleMenu}
						type='button'
					>
						<div className='absolute flex h-[23px] w-[30px] items-center justify-center'>
							<div className='absolute flex h-[23.55px] w-[23.46px] items-center justify-center sm:h-[18.55px] sm:w-[18.48px]'>
								<div className='absolute left-[2.12px] top-[0.21px] h-[3px] w-[30px] origin-top-left rotate-45 rounded-[50px] bg-white sm:left-[1.67px] sm:top-[0.17px] sm:h-[2.36px] sm:w-[23.63px]' />
								<div className='absolute left-[0.12px] top-[21.21px] h-[3px] w-[30px] origin-top-left -rotate-45 rounded-[50px] bg-white sm:left-[0.10px] sm:top-[16.71px] sm:h-[2.36px] sm:w-[23.63px]' />
							</div>
						</div>
					</button>
				</div>
			) : (
				<button
					className='flex h-20 w-20 items-center justify-center bg-primary sm:h-[50px] sm:w-[50px]'
					onClick={handleMenu}
					type='button'
				>
					<div className='absolute h-[23px] w-[30px] sm:h-[14.38px] sm:w-[18.75px]'>
						<div className='absolute top-0 h-[3px] w-[30px] rounded-[50px] bg-white sm:h-[1.88px] sm:w-[18.75px]' />
						<div className='absolute top-[10px] h-[3px] w-[30px] rounded-[50px] bg-white sm:top-[6.25px] sm:h-[1.88px] sm:w-[18.75px]' />
						<div className='absolute top-[20px] h-[3px] w-[30px] rounded-[50px] bg-white sm:top-[12.50px] sm:h-[1.88px] sm:w-[18.75px]' />
					</div>
				</button>
			)}
		</div>
	)
}

export default memo(ButtonBurger)
