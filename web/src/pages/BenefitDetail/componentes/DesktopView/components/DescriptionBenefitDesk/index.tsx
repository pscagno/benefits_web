import { memo } from 'react'

import BreadCrumb from 'components/BreadCrumb/BreadCrumb'

import type { Props } from './types'

function DescriptionBenefit({
	nameBenefitsCard,
	title,
	description,
	id
}: Props) {
	return (
		<div className='h-auto flex-auto pt-[62px] md:pt-[42px] lg:pt-[42px]'>
			<BreadCrumb title={nameBenefitsCard} titleRedirectId={id} />
			<p className='mx-2 font-TitilliumWeb text-[32px] font-light text-indigo-950 md:text-[28px]'>
				Dashi
			</p>
			<p className='mx-2 font-TitilliumWeb text-[46px] font-semibold text-primary md:text-[36px] lg:text-[40px]'>
				{title}
			</p>
			<p className='font-Titillium Web mx-2 text-base font-light text-indigo-950'>
				{description}
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
					porttitor feugiat purus eget interdum. Ut eu molestie metus. Praesent
					semper eros sed nunc euismod consectetur. Praesent semper auctor
					tortor porttitor egestas. Aenean in dapibus sapien, quis luctus nisi.
					<br />
					<br /> Pellentesque quis ex vitae est commodo maximus ut hendrerit
					nisl. Suspendisse suscipit venenatis risus, in condimentum velit
					congue ac. Aenean porttitor vitae nibh id sodales.
					<br />
					<br /> Sed vehicula nisl elit, eget consectetur libero scelerisque a.
					Duis efficitur dapibus massa, sed rutrum quam pretium non. Nam ac
					pellentesque tortor. In hac habitasse platea dictumst.
					<br />
					<br /> In fermentum dignissim porta. Donec ullamcorper dolor ut ante
					fermentum pretium. Nunc odio diam, faucibus eget lorem id, finibus
					rutrum tortor. Donec molestie eros nunc, at aliquet felis sollicitudin
					ullamcorper.
					<br />
					<br /> Curabitur a erat vitae dolor facilisis malesuada. Vivamus
					rhoncus condimentum dolor a laoreet. Nulla posuere risus non placerat
					rutrum. Ut quis sodales est. Aliquam non lorem ullamcorper tortor
					tristique pulvinar eget in purus.
				</p>
			</p>
		</div>
	)
}

export default memo(DescriptionBenefit)
