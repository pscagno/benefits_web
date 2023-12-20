import { memo } from 'react'

import type { Props } from './types'

function BreadCrumb({ categoryName, categoryId }: Props) {
	return (
		<nav aria-label='Breadcrumb' className='flex justify-start'>
			<ol className='inline-flex items-center space-x-1 md:space-x-3'>
				<li className='inline-flex items-center'>
					<a
						className='ml-2 text-[#FF4351] sm:ml-0 sm:text-sm sm:font-light'
						href='/'
					>
						Inicio
					</a>
				</li>
				<li aria-current='page'>
					<div className='flex flex-row items-center'>
						<p className='text-black'>/</p>
						<a
							className='mx-2 flex-nowrap text-ellipsis text-[#FF4351] sm:text-sm sm:font-light md:ml-2'
							href={`/category/${categoryId}`}
						>
							{categoryName}
						</a>
						<p className='text-black'>/</p>
					</div>
				</li>
			</ol>
		</nav>
	)
}

export default memo(BreadCrumb)
