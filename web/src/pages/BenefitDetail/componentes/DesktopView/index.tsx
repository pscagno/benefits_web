import HeartFavorite from 'assets/heartFavorite/heartFavorite'
import Header from 'assets/images/dashi-header.png'
import Logo from 'assets/images/dashi-logo.png'
import Button from 'components/Button'
import CarouselComponent from 'components/Carousel'
import Filters from 'components/Filters'
import OurValues from 'components/OurValues'
import Raiting from 'components/Raiting'

import type { Props } from '../../types'
import responsive from '../../utils'
import DescriptionBenefit from './components/DescriptionBenefitDesk'

function DesktopView({
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
		<div className='mt-8 h-full bg-white'>
			<div className='flex flex-col items-center'>
				<div className='flex w-full items-end bg-center bg-no-repeat md:!h-[371px] lg:!h-[478px] xl:!h-[650px] xl:max-h-[650px]'>
					<img alt={nameBenefitsCard} className='h-auto w-full' src={Header} />
				</div>
				<div
					className='relative flex h-[80px] w-full justify-center md:h-[60px]'
					style={{
						backgroundColor: bgColor
					}}
				>
					<p className='flex items-center font-TitilliumWeb text-[32px] font-semibold uppercase text-white md:text-[24px] lg:text-[28px]'>
						{nameBenefitsCard}
					</p>
				</div>
				<div className='flex w-full max-w-[1320px] flex-row justify-center px-[20px] pb-[62px]'>
					<div className='relative mr-[15px] flex h-[500px] min-w-[400px] flex-col justify-end md:min-w-[320px]'>
						<div className='image-store absolute bottom-[250px] flex h-[400px] w-[400px] justify-end rounded-lg md:relative md:bottom-[0px] md:ml-[20px] md:mt-[42px] md:h-[300px]  md:w-[300px] lg:relative lg:bottom-[0px] lg:ml-[52px] lg:mt-[62px] lg:h-[320px] lg:w-[320px]'>
							<img alt='test' className='h-auto w-full rounded-lg' src={Logo} />
							<button
								className='absolute p-3'
								onClick={handleSelectBenefit}
								type='button'
							>
								<HeartFavorite isSelected={isSelected} />
							</button>
						</div>
						<div className='h-[50%] md:ml-[20px] lg:ml-[52px]'>
							<div className='my-[29px] flex h-[40px] w-full justify-center'>
								<Button text='¡LO QUIERO!' />
							</div>
							<div className='flex h-[32px] w-full justify-center'>
								<Raiting />
							</div>
						</div>
					</div>
					<DescriptionBenefit
						description={description}
						id={id}
						nameBenefitsCard={nameBenefitsCard}
						title={title}
					/>
				</div>
			</div>
			<div className='b-[-21rem] relative flex h-full w-full justify-center'>
				<div className='h-[725px] max-w-[1600px] md:w-[100%] lg:w-[100%] xl:w-[95%] lp:w-[100%]'>
					<CarouselComponent responsive={responsive}>
						{dataCarousel?.map(item => (
							<div
								className='flex h-[725px] w-full justify-center'
								key={item.id}
							>
								<img
									alt={item.altImage}
									className='h-[625px] w-[1296px] object-cover lg:w-[880px] lp:w-[1150px]'
									src={item.image}
								/>
							</div>
						))}
					</CarouselComponent>
				</div>
			</div>
			<div className='b-[-21rem] relative flex h-full w-full justify-center'>
				<div className='flex w-full justify-center'>
					<Filters />
				</div>
			</div>
			<OurValues />
		</div>
	)
}

export default DesktopView
