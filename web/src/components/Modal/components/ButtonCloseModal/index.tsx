import type { Props } from './types'

function ButtonCloseModal({ setShowModal }: Props) {
	return (
		<button
			className='absolute end-2.5 top-3 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm hover:bg-gray-200'
			data-modal-hide='popup-modal'
			onClick={() => setShowModal(false)}
			type='button'
		>
			<svg
				aria-hidden='true'
				className='h-3 w-3'
				fill='none'
				viewBox='0 0 14 14'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
					stroke='currentColor'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2'
				/>
			</svg>
		</button>
	)
}

export default ButtonCloseModal
