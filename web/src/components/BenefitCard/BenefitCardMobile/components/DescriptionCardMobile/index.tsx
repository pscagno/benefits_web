import StarMobile from 'assets/StarMobile/StarMobile'

import type { Props } from './types'

function DescriptionCardMobile({
	handleIWantButton,
	title,
	qualification,
	description
}: Props) {
	return (
		<button className='text-left' onClick={handleIWantButton} type='button'>
			<div className='pl-[20px] pr-[20px] pt-4'>
				<div className='inline-flex h-[120px] w-full flex-col items-start justify-start gap-[0px]'>
					<div className='flex w-full flex-row justify-between'>
						<p className='pb-[7px] font-TitilliumWeb text-lg font-semibold leading-relaxed text-primary'>
							{title}
						</p>

						<div className='flex flex-row items-center gap-1'>
							<StarMobile />
							<p className='font-TitilliumWeb text-xs font-semibold text-black'>
								{qualification}
							</p>
						</div>
					</div>

					<p className='card-description truncate-3-lines max-h-[91px] max-w-[290px] overflow-hidden font-TitilliumWeb text-sm font-light text-primary-description'>
						{description}
					</p>
				</div>
			</div>
		</button>
	)
}

export default DescriptionCardMobile
