import { memo } from 'react'

import StarRaiting from 'assets/images/star-filled.png'
import BreadCrumb from 'components/BreadCrumb/BreadCrumb'

import type { Props } from '../../DesktopView/components/DescriptionBenefitDesk/types'

function DescriptionBenefitMobile({
	nameBenefitsCard,
	title,
	description,
	id
}: Props) {
	return (
		<div>
			<div className='flex flex-row justify-between px-[18px] '>
				<BreadCrumb title={nameBenefitsCard} titleRedirectId={id} />
				<div className='flex flex-row items-center'>
					<img alt='starRaiting' src={StarRaiting} />
					<p className='ml-[3px] font-TitilliumWeb text-xs font-semibold text-black'>
						4.50
					</p>
				</div>
			</div>
			<div className='inline-flex w-full flex-col items-start justify-start gap-[5px] px-[18px]'>
				<p className='mt-[3px] font-TitilliumWeb text-[22px] font-light text-primary'>
					Dashi
				</p>
				<div className='font-TitilliumWeb text-2xl font-semibold leading-[30px] text-primary'>
					{title}
				</div>
				<p className='font-TitilliumWeb text-sm font-light text-primary'>
					{description}
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
						porttitor feugiat purus eget interdum. Ut eu molestie metus.
						Praesent semper eros sed nunc euismod consectetur. Praesent semper
						auctor tortor porttitor egestas. Aenean in dapibus sapien, quis
						luctus nisi.
						<br />
						<br /> Pellentesque quis ex vitae est commodo maximus ut hendrerit
						nisl. Suspendisse suscipit venenatis risus, in condimentum velit
						congue ac. Aenean porttitor vitae nibh id sodales.
						<br />
						<br /> Sed vehicula nisl elit, eget consectetur libero scelerisque
						a. Duis efficitur dapibus massa, sed rutrum quam pretium non. Nam ac
						pellentesque tortor. In hac habitasse platea dictumst.
						<br />
						<br /> In fermentum dignissim porta. Donec ullamcorper dolor ut ante
						fermentum pretium. Nunc odio diam, faucibus eget lorem id, finibus
						rutrum tortor. Donec molestie eros nunc, at aliquet felis
						sollicitudin ullamcorper.
						<br />
						<br /> Curabitur a erat vitae dolor facilisis malesuada. Vivamus
						rhoncus condimentum dolor a laoreet. Nulla posuere risus non
						placerat rutrum. Ut quis sodales est. Aliquam non lorem ullamcorper
						tortor tristique pulvinar eget in purus.
					</p>
				</p>
			</div>
		</div>
	)
}

export default memo(DescriptionBenefitMobile)
