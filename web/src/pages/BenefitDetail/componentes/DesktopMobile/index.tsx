import HeartFavorite from 'assets/heartFavorite/heartFavorite'
import Header from 'assets/images/dashi-header-mobile.png'
import Logo from 'assets/images/dashi-logo.png'
import Button from 'components/Button'
import CarouselComponent from 'components/Carousel'
import Filters from 'components/Filters'
import OurValues from 'components/OurValues'
import Raiting from 'components/Raiting'

import type { Props } from '../../types'
import responsive from '../../utils'
import DescriptionBenefitMobile from './DescriptionBenefitMobile'

import '../../styles.css'

function MobileView({
	nameBenefitsCard,
	title,
	description,
	bgColor,
	handleSelectBenefit,
	isSelected,
	dataCarousel,
	id
}: Props) {
	return (
		<div className='mt-20 h-full w-screen overflow-hidden bg-white'>
			<div className='image-store flex !h-[383px] w-full justify-center bg-center bg-no-repeat lg:!h-[478px] xl:!h-[650px]'>
				<img alt='header' className='h-auto w-full' src={Header} />
			</div>
			<div>
				<div>
					<img
						alt='Logo'
						className='absolute right-[18px] top-[302px] h-[144px] w-[144px] rounded-[10px]'
						src={Logo}
					/>
				</div>
				<div
					className='flex h-full w-full justify-center font-TitilliumWeb text-[22px] font-semibold uppercase leading-[3.625rem] text-white'
					style={{
						backgroundColor: bgColor
					}}
				>
					{nameBenefitsCard}
				</div>
				<div className='absolute right-[24px] top-[105px] w-[30px]'>
					<button onClick={handleSelectBenefit} type='button'>
						<HeartFavorite isSelected={isSelected} />
					</button>
				</div>
				<div className='my-5 flex h-10 w-full justify-center'>
					<Raiting />
				</div>
				<DescriptionBenefitMobile
					description={description}
					id={id}
					nameBenefitsCard={nameBenefitsCard}
					title={title}
				/>
				<div className='flex h-28 w-full items-center justify-center'>
					<Button text='¡LO QUIERO!' />
				</div>
			</div>
			<div className='b-[-21rem] relative flex h-full w-full justify-center'>
				<div className='h-[300px] w-[100%]'>
					<CarouselComponent
						autoPlay={false}
						responsive={responsive}
						arrows
						showDots
					>
						{dataCarousel?.map(item => (
							<div
								className='flex h-[725px] w-full justify-center sm:h-[285px]'
								key={item.id}
							>
								<img
									alt={item.altImage}
									className='h-[625px] w-[1296px] object-cover sm:h-[241px] lg:w-[880px] lp:w-[1150px]'
									src={item.image}
								/>
							</div>
						))}
					</CarouselComponent>
				</div>
			</div>
			<div className='flex w-full justify-center'>
				<Filters />
			</div>
			<OurValues />
		</div>
	)
}

export default MobileView
