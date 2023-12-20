import type { CardBenefits } from 'components/CardsBenefits/types'
import { memo, useCallback } from 'react'

import ButtonHeart from '../components/ButtonHeart'
import ButtonShare from '../components/ButtonShare'
import DescriptionCardDesktop from './components/DescriptionCardDesktop'

import '../styles.css'

function BenefitCardDesktop({
	bgColor,
	description,
	qualification,
	id,
	imageList,
	nameBenefitsCard,
	userFavorite,
	onClickButton,
	keyQueryName,
	title
}: CardBenefits) {
	// TODO recibir solo el ID, ya que si se comparte debe hacer el pedido a la Api solo con ID
	const handleIWantButton = useCallback(() => {
		const stateData = {
			nameBenefitsCard,
			imageList,
			title,
			description,
			userFavorite,
			bgColor,
			keyQueryName,
			id
		}
		onClickButton(id, stateData)
	}, [
		bgColor,
		description,
		id,
		imageList,
		nameBenefitsCard,
		userFavorite,
		keyQueryName,
		onClickButton,
		title
	])
	return (
		<div className='benefit-card relative block h-[441px] w-[306px] cursor-default rounded-[10px] bg-white shadow'>
			<div className='relative w-full'>
				<div className='button-not-favorite first-line:absolute'>
					<ButtonHeart
						id={id}
						keyQueryName={keyQueryName}
						userFavorite={userFavorite}
					/>
				</div>
				<img
					alt={nameBenefitsCard}
					className='h-[214px] w-[306px] rounded-t-[10px] object-cover'
					src={`data:image/png;base64,${imageList}`}
				/>
				<ButtonShare
					bgColor={bgColor}
					id={id}
					nameBenefitsCard={nameBenefitsCard}
				/>
			</div>
			<DescriptionCardDesktop
				description={description}
				handleIWantButton={handleIWantButton}
				qualification={qualification}
				title={title}
			/>
		</div>
	)
}

export default memo(BenefitCardDesktop)
