import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import useMediaQuery from 'Utils/mediaQuery'
import BenefitCardDesktop from 'components/BenefitCard/BenefitCardDesktop'
import BenefitCardMobile from 'components/BenefitCard/BenefitCardMobile'
import type { State } from 'components/BenefitCard/types'
import Button from 'components/Button'
import Loading from 'components/Loading/Loading'

import type { Props } from './types'

function onClickMoreCards() {
	// eslint-disable-next-line no-console
	console.log('onClickMoreCards')
}

function BenefitsCards({ data, header, bg, headerSize }: Props) {
	const navigate = useNavigate()
	const mobile = useMediaQuery({ query: '(max-width: 768px)' })

	const onClickRedirectDetailButton = useCallback(
		(id: number, state: State) => {
			const { nameBenefitsCard, imageList, title, description, bgColor } = state
			navigate(`/benefit/${id}`, {
				state: { nameBenefitsCard, imageList, title, description, bgColor, id }
			})
		},
		[navigate]
	)

	if (data.length < 0) {
		return (
			<div className='flex justify-center'>
				<Loading />
			</div>
		)
	}

	return (
		<section className={`h-auto w-full sm:pt-20 md:pt-0 ${bg}`}>
			{headerSize === 'base' ? (
				<h2 className='py-[66px] text-center font-TitilliumWeb text-[32px] font-[600] leading-normal text-primary-description sm:hidden md:block'>
					{header}
				</h2>
			) : (
				<h1 className="font-['Titillium Web'] py-[50px] text-center text-[42px] font-[600] leading-normal text-primary-description">
					{header}
				</h1>
			)}
			<div className='grid place-content-center'>
				<div className='mx-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4 lp:grid-cols-3'>
					{data.map(card =>
						mobile ? (
							<BenefitCardMobile
								bgColor={card.bgColor}
								description={card.description}
								id={card.id}
								imageList={card.imageList}
								key={card.id}
								nameBenefitsCard={card.nameBenefitsCard}
								onClickButton={onClickRedirectDetailButton}
								qualification={card.qualification}
								title={card.title}
							/>
						) : (
							<BenefitCardDesktop
								bgColor={card.bgColor}
								description={card.description}
								id={card.id}
								imageList={card.imageList}
								key={card.id}
								nameBenefitsCard={card.nameBenefitsCard}
								onClickButton={onClickRedirectDetailButton}
								qualification={card.qualification}
								title={card.title}
							/>
						)
					)}
				</div>
				<div className='mx-auto my-[26px]'>
					<Button onClick={onClickMoreCards} text='Ver más beneficios' />
				</div>
			</div>
		</section>
	)
}

export default BenefitsCards
