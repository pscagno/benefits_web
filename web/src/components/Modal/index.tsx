import React, { memo } from 'react'

import ButtonCloseModal from './components/ButtonCloseModal'
import type { Props } from './types'

function Modal({ textOrIconButton, titleModal, children, buttonClass }: Props) {
	const [showModal, setShowModal] = React.useState(false)

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation()
		setShowModal(previousSelected => !previousSelected)
	}

	return (
		<>
			<button
				className={
					buttonClass ||
					'mb-1 mr-1 rounded bg-pink-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-pink-600'
				}
				onClick={handleClick}
				type='button'
			>
				{textOrIconButton}
			</button>
			{showModal ? (
				<>
					<div className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none'>
						<div className='shadow-box relative flex w-auto max-w-3xl flex-col items-center rounded-[10px] bg-white text-center font-TitilliumWeb text-[42px] font-semibold leading-[64px] text-primary sm:w-[350px]'>
							<div className='flex w-[90%] items-start justify-center rounded-t border-b border-neutral-300 p-5'>
								<h3 className='overflow-hidden text-3xl font-semibold sm:text-lg'>
									{titleModal}
								</h3>
								<ButtonCloseModal setShowModal={setShowModal} />
							</div>
							<div className='relative h-auto w-auto flex-auto p-6'>
								{children}
							</div>
						</div>
					</div>
					<div className='fixed inset-0 z-40 bg-black opacity-25' />
				</>
			) : undefined}
		</>
	)
}

export default memo(Modal)
