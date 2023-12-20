/* eslint-disable @typescript-eslint/no-magic-numbers */
import ButtonHeart from 'components/BenefitCard/components/ButtonHeart'
import ModalShare from 'components/BenefitCard/components/ModalShare'
import CarouselComponent from 'components/Carousel'
import Filters from 'components/Filters'
import Raiting from 'components/Raiting'

import type { Props } from '../../types'
import responsive from '../../utils'
import BenefitDescriptionMobile from './BenefitDescriptionMobile'

import '../../styles.css'

function MobileView({ benefitData, keyQueryName }: Props) {
	const {
		id,
		imageHeaderMobile,
		imageList,
		categoryId,
		categoryColor,
		imageDetails1,
		imageDetails2,
		title,
		description,
		text,
		categoryName,
		qualification,
		userFavorite,
		averageQualification
	} = benefitData

	return (
		<div className='h-full w-full overflow-hidden bg-white'>
			<div className='image-store flex !h-[383px] w-full justify-center bg-center bg-no-repeat lg:!h-[478px] xl:!h-[650px]'>
				<img
					alt='header mobile'
					className='h-auto w-full'
					src={`data:image/png;base64,${imageHeaderMobile}`}
				/>
			</div>
			<div>
				<div>
					<img
						alt='imageList'
						className='absolute right-[18px] top-[222px] h-[144px] w-[144px] rounded-[10px]'
						src={`data:image/png;base64,${imageList}`}
					/>
				</div>
				<div
					className='flex h-full w-full justify-center font-TitilliumWeb text-[22px] font-semibold uppercase leading-[3.625rem] text-white'
					style={{
						backgroundColor: categoryColor
					}}
				>
					{categoryName}
				</div>
				<div className='absolute right-[24px] top-[75px] w-[30px]'>
					<ButtonHeart
						id={id}
						keyQueryName={keyQueryName}
						userFavorite={userFavorite}
					/>
				</div>
				<div className='my-5 flex h-10 w-full justify-center'>
					<Raiting benefitId={id} qualification={qualification} />
				</div>
				<BenefitDescriptionMobile
					averageQualification={averageQualification}
					categoryId={categoryId}
					categoryName={categoryName}
					description={description}
					id={id}
					text={text}
					title={title}
				/>
				<div className='my-6 flex w-full justify-center'>
					<div className='fcenter h-[40px] w-[144px] rounded-[50px] bg-benefits transition-colors duration-300 ease-in hover:bg-[#FF4351]'>
						<ModalShare id={id} text='COMPARTIR' transparentBgColor />
					</div>
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
						<div
							className='flex h-[725px] w-full justify-center'
							key='imageDetails1'
						>
							<img
								alt='imageDetails1'
								className='h-[625px] w-[1296px] object-cover lg:w-[880px] lp:w-[1150px]'
								src={`data:image/png;base64,${imageDetails1}`}
							/>
						</div>
						<div
							className='flex h-[725px] w-full justify-center'
							key='imageDetails2'
						>
							<img
								alt='imageDetails2'
								className='h-[625px] w-[1296px] object-cover lg:w-[880px] lp:w-[1150px]'
								src={`data:image/png;base64,${imageDetails2}`}
							/>
						</div>
					</CarouselComponent>
				</div>
			</div>
			<div className='flex w-full justify-center'>
				<Filters />
			</div>
		</div>
	)
}

export default MobileView
