import StarMobile from 'assets/StarMobile/StarMobile'
import type { DescriptionCards } from 'components/BenefitCard/types'
import Button from 'components/Button'

function DescriptionCardDesktop({
	handleIWantButton,
	title,
	qualification,
	description
}: DescriptionCards) {
	return (
		<div className='h-[227px]'>
			<div className='pl-[20px] pr-[20px] pt-4'>
				<div className='inline-flex h-[124px] w-[265px] flex-col items-start justify-start gap-[7px]'>
					<div className='flex w-full flex-row justify-between'>
						<p className='pb-[0px] font-TitilliumWeb text-[22px] font-semibold leading-relaxed text-primary'>
							{title}
						</p>

						<div className='hidden flex-row items-center gap-1'>
							<StarMobile />
							<p className='font-TitilliumWeb text-xs font-semibold text-black'>
								{qualification}
							</p>
						</div>
					</div>

					<p className='card-description truncate-3-lines max-h-[91px] max-w-[265px] overflow-hidden font-TitilliumWeb text-base font-light text-primary-description'>
						{description}
					</p>
				</div>
			</div>
			<div className='mx-auto mt-[14px] flex h-10 justify-center'>
				<Button onClick={handleIWantButton} text='¡LO QUIERO!' />
			</div>
		</div>
	)
}

export default DescriptionCardDesktop
