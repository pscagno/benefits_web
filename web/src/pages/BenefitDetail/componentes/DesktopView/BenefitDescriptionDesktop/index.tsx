import { memo } from 'react'

import StarRaiting from 'assets/images/star-filled.png'
import BreadCrumb from 'components/BreadCrumb/BreadCrumb'

import type { BenefitDescription } from '../../../types'

function BenefitDescriptionDesktop({
	title,
	description,
	text,
	categoryName,
	categoryId,
	averageQualification
}: BenefitDescription) {
	return (
		<div className='fcol h-auto justify-between pt-[62px] md:pt-[42px] lg:pt-[42px]'>
			<div>
				<BreadCrumb categoryId={categoryId} categoryName={categoryName} />
				<div className='frow gap-2'>
					<p className='mx-2 font-TitilliumWeb text-[32px] font-light text-indigo-950 md:text-[28px]'>
						{title}
					</p>
					<div className='flex flex-row items-center'>
						<img alt='starRaiting' src={StarRaiting} />
						<p className='ml-[3px] font-TitilliumWeb text-[15px] font-semibold text-black'>
							{averageQualification?.toFixed(1)}
						</p>
					</div>
				</div>
				<p className='mx-2 font-TitilliumWeb text-[46px] font-semibold text-primary md:text-[36px] lg:text-[40px]'>
					{description}
				</p>
				<p className='mx-2 font-TitilliumWeb text-base font-light text-indigo-950'>
					{text}
				</p>
			</div>
			<div className='fcenter mt-8 h-[51px] w-full bg-[#f1f1f1]'>
				<h1 className='font-TitilliumWeb text-base font-bold text-primary-description'>
					Beneficio exclusivo para: provincia/ciudad
				</h1>
			</div>
		</div>
	)
}

export default memo(BenefitDescriptionDesktop)
