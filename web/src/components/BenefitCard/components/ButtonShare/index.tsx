/* eslint-disable no-console */
import { memo } from 'react'

import Loading from 'components/Loading/Loading'

import ModalShare from '../ModalShare'
import type { Props } from './types'

function ButtonShare({ nameBenefitsCard, bgColor, id }: Props) {

	if (!bgColor || !nameBenefitsCard || !id) {
		return (
			<div className='absolute bottom-0 flex w-[40%] justify-center'>
				<Loading />
			</div>
		)
	}

	return (
		<div className='absolute bottom-0 flex'>
			<div
				className='grid h-[30px] place-content-center object-cover px-[18px]'
				style={{ backgroundColor: bgColor }}
			>
				<div className='font-TitilliumWeb text-base font-semibold capitalize text-white'>
					{nameBenefitsCard}
				</div>
			</div>
			<ModalShare id={id} />
		</div>
	)
}

export default memo(ButtonShare)
