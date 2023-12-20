/* eslint-disable @typescript-eslint/no-magic-numbers */
import ButtonHeart from 'components/BenefitCard/components/ButtonHeart'
import ModalShare from 'components/BenefitCard/components/ModalShare'
import CarouselComponent from 'components/Carousel'
import Filters from 'components/Filters'
import Raiting from 'components/Raiting'

import type { Props } from '../../types'
import responsive from '../../utils'
import BenefitDescriptionDesktop from './BenefitDescriptionDesktop'

function DesktopView({ benefitData, keyQueryName }: Props) {
	const {
		id,
		imageHeader,
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
		<div className='h-full bg-white'>
			<div className='flex flex-col items-center'>
				<div className='flex w-full items-end bg-center bg-no-repeat md:!h-[371px] lg:!h-[478px] xl:!h-[650px] xl:max-h-[650px]'>
					<img
						alt='header desktop'
						className='h-auto w-full'
						src={`data:image/png;base64,${imageHeader}`}
					/>
				</div>
				<div
					className='relative flex h-[80px] w-full justify-center md:h-[60px]'
					style={{
						backgroundColor: categoryColor
					}}
				>
					<p className='flex items-center font-TitilliumWeb text-[32px] font-semibold uppercase text-white md:text-[24px] lg:text-[28px]'>
						{categoryName}
					</p>
				</div>
				<div className='flex w-full max-w-[1320px] flex-row justify-center px-[20px] pb-[20px]'>
					<div className='relative mr-[15px] flex h-[500px] min-w-[400px] flex-col justify-end md:min-w-[320px]'>
						<div className='image-store absolute bottom-[250px] flex h-[400px] w-[400px] justify-end rounded-lg md:relative md:bottom-[0px] md:ml-[20px] md:mt-[42px] md:h-[300px]  md:w-[300px] lg:relative lg:bottom-[0px] lg:ml-[52px] lg:mt-[62px] lg:h-[320px] lg:w-[320px]'>
							<img
								alt='imageList'
								className='h-auto w-full rounded-lg'
								src={`data:image/png;base64,${imageList}`}
							/>
							<div className='absolute p-3'>
								<ButtonHeart
									id={id}
									keyQueryName={keyQueryName}
									userFavorite={userFavorite}
								/>
							</div>
						</div>
						<div className='fcol h-[50%] items-center md:ml-[20px] lg:ml-[26px]'>
							<div className='my-8 flex h-[32px] w-full justify-center'>
								<Raiting benefitId={id} qualification={qualification} />
							</div>
							<div className='fcenter h-[40px] w-[144px] rounded-[50px] bg-benefits transition-colors duration-300 ease-in hover:bg-[#FF4351]'>
								<ModalShare id={id} text='COMPARTIR' transparentBgColor />
							</div>
						</div>
					</div>
					<BenefitDescriptionDesktop
						averageQualification={averageQualification}
						categoryId={categoryId}
						categoryName={categoryName}
						description={description}
						id={id}
						text={text}
						title={title}
					/>
				</div>
			</div>
			<div className='b-[-21rem] relative flex h-full w-full justify-center'>
				<div className='h-[725px] max-w-[1600px] md:w-[100%] lg:w-[100%] xl:w-[95%] lp:w-[100%]'>
					<CarouselComponent responsive={responsive}>
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
			<div className='b-[-21rem] relative flex h-full w-full justify-center'>
				<div className='flex w-full justify-center'>
					<Filters />
				</div>
			</div>
		</div>
	)
}

export default DesktopView
