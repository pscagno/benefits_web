import { memo } from 'react'

import StarRaiting from 'assets/images/star-filled.png'
import BreadCrumb from 'components/BreadCrumb/BreadCrumb'

import type { BenefitDescription } from '../../../types'

function BenefitDescriptionMobile({
	title,
	description,
	text,
	categoryName,
	categoryId,
	averageQualification
}: BenefitDescription) {
	return (
		<div>
			<div className='flex flex-row justify-between px-[18px] '>
				<BreadCrumb categoryId={categoryId} categoryName={categoryName} />
				<div className='flex flex-row items-center'>
					<img alt='starRaiting' src={StarRaiting} />
					<p className='ml-[3px] font-TitilliumWeb text-xs font-semibold text-black'>
						{averageQualification.toFixed(1)}
					</p>
				</div>
			</div>
			<div className='inline-flex w-full flex-col items-start justify-start gap-[5px] px-[18px]'>
				<p className='mt-[3px] font-TitilliumWeb text-[22px] font-light text-primary'>
					{title}
				</p>
				<div className='font-TitilliumWeb text-2xl font-semibold leading-[30px] text-primary'>
					{description}
				</div>
				<p className='font-TitilliumWeb text-sm font-light text-primary'>
					{text}
				</p>
				<div className='fcenter mt-8 h-[51px] w-full bg-[#f1f1f1]'>
					<h1 className='font-TitilliumWeb text-base font-bold text-primary-description'>
						Beneficio exclusivo para: provincia/ciudad
					</h1>
				</div>
			</div>
		</div>
	)
}

export default memo(BenefitDescriptionMobile)
