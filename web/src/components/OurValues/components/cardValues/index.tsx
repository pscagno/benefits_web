import { memo } from 'react'

import type { Props } from './types'

function CardValues({ icon, textValue, color }: Props) {
	return (
		<div className='flex h-[111px] w-[133px] flex-col items-center justify-between'>
			<div className='flex h-[66px] w-[133px] items-center justify-center text-center font-TitilliumWeb text-[32px] font-semibold text-indigo-950'>
				{icon}
			</div>

			<p
				className={`text-center font-TitilliumWeb text-[22px] font-semibold ${color}`}
			>
				{textValue}
			</p>
		</div>
	)
}

export default memo(CardValues)
