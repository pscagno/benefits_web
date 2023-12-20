import { memo } from 'react'

import type { Props } from './types'

function BenefitFilterCard({ logoType, name, color }: Props) {
	return (
		<div className='h-[129px] w-[196px] cursor-pointer rounded-[5px] shadow-filterShadow sm:h-[65px] sm:w-[99px]'>
			<div className='flex h-[122px] flex-col rounded-[5px] sm:h-[62px] sm:pt-2'>
				<div className='flex-start mt-[19px] flex h-16 w-full items-center justify-center sm:mt-[0px] sm:h-8'>
					<img
						alt={name}
						className='relative h-auto w-auto bg-no-repeat object-cover sm:h-[25px] sm:w-[30px]'
						src={`data:image/png;base64,${logoType}`}
					/>
				</div>
				<h3 className='pb-[17px] pt-1 text-center text-xs font-semibold text-gray-800 sm:text-[10px] sm:capitalize '>
					{name}
				</h3>
			</div>
			<div
				className='h-[7px] w-[196px] rounded-b-[5px] sm:h-[3.54px] sm:w-[99px] '
				style={{
					backgroundColor: color
				}}
			/>
		</div>
	)
}

export default memo(BenefitFilterCard)
