import { memo } from 'react'

import HealthIcon from 'assets/HealthIcon'
import HealthIconMobile from 'assets/HealtIconMobile/HealtIconMobile'
import NoneIcon from 'assets/NoneIcon'
import NoneIconMobile from 'assets/NoneIconMobile/NoneIconMobile'

import type { Props } from './types'

function BenefitFilterCard({ logoType, name, color }: Props) {
	return (
		<div className='h-[129px] w-[196px] cursor-pointer rounded-[5px] shadow-filterShadow sm:h-[65px] sm:w-[99px]'>
			<div className='flex h-[122px] flex-col rounded-[5px] sm:h-[62px] sm:pt-2'>
				<div className='flex-start mt-[19px] flex h-16 w-full items-center justify-center sm:mt-[0px] sm:h-8'>
					{logoType === 'health' ? (
						<>
							<div className='icon-desktop'>
								<HealthIcon />
							</div>
							<div className='icon-mobile'>
								<HealthIconMobile />
							</div>
						</>
					) : (
						<>
							<div className='icon-desktop'>
								<NoneIcon />
							</div>
							<div className='icon-mobile'>
								<NoneIconMobile />
							</div>
						</>
					)}
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
