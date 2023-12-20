import type { CardBenefits } from 'components/CardsBenefits/types'
import { memo, useCallback } from 'react'

import ButtonHeart from '../components/ButtonHeart'
import ButtonShare from '../components/ButtonShare'
import DescriptionCardMobile from './components/DescriptionCardMobile'

import '../styles.css'

function BenefitCardMobile({
	bgColor,
	description,
	qualification,
	id,
	imageList,
	nameBenefitsCard,
	onClickButton,
	userFavorite,
	keyQueryName,
	title
}: CardBenefits) {
	// TODO recibir solo el ID, ya que si se comparte el link debe hacer el pedido a la Api solo con ID
	const handleIWantButton = useCallback(() => {
		const stateData = {
			nameBenefitsCard,
			imageList,
			title,
			description,
			bgColor,
			userFavorite,
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
		onClickButton,
		title,
		keyQueryName
	])

	return (
		<div className='benefit-card relative block h-[348px] w-[329px] cursor-default rounded-[10px] bg-white shadow'>
			<div className='relative h-[210px] w-full'>
				<div className='button-not-favorite first-line:absolute'>
					<ButtonHeart
						id={id}
						keyQueryName={keyQueryName}
						userFavorite={userFavorite}
					/>
				</div>
				<button
					className='h-full w-full'
					onClick={handleIWantButton}
					type='button'
				>
					<img
						alt={nameBenefitsCard}
						className='h-[210px] w-[329px] rounded-t-[10px] object-cover'
						src={`data:image/png;base64,${imageList}`}
					/>
				</button>
				<ButtonShare
					bgColor={bgColor}
					id={id}
					nameBenefitsCard={nameBenefitsCard}
				/>
			</div>
			<DescriptionCardMobile
				description={description}
				handleIWantButton={handleIWantButton}
				qualification={qualification}
				title={title}
			/>
		</div>
	)
}

export default memo(BenefitCardMobile)
