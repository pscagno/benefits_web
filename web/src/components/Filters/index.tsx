import { useQuery } from '@tanstack/react-query'
import { memo, useCallback } from 'react'
import Carousel from 'react-multi-carousel'
import { useNavigate } from 'react-router-dom'
// import type { FilterResponse } from 'api/getFilter'
import 'react-multi-carousel/lib/styles.css'

import type { FilterResponse } from 'api/getFilter'
import getFilters from 'api/getFilter'
import Loading from 'components/Loading/Loading'

import BenefitFilterCard from './components/BenefitFilterCard'
import ButtonGroup from './components/ButtonGroup'
import './styles.css'
import utils from './utils'

function Filters() {
	// const { filterResponseIsLoading, isError, error, filtersResponse } =
	// 	useGetAllFilter()
	const { isLoading, data } = useQuery(['filters'], getFilters)
	console.log('data filters', data)
	const navigate = useNavigate()

	const handleRedirect = useCallback(
		(state: FilterResponse) => {
			navigate(`/category/${state.id}`, {
				state
			})
		},
		[navigate]
	)

	if (isLoading) {
		return (
			<div className='flex justify-center'>
				<Loading />
			</div>
		)
	}
	return (
		<div className='container-class !important lg:min-w-[999px]: flex h-[250px] w-[100%] min-w-[1485] max-w-[1498px] flex-col items-center justify-center sm:max-w-[420px] md:w-[100%] md:min-w-[739px] md:max-w-[740px] lg:w-[100%] lg:max-w-[1000px] xl:w-[100%] xl:max-w-[1550px] lp:w-[100%] lp:max-w-[1286px]'>
			<div className='flex h-[100px] items-center sm:h-[50px]'>
				<p className='mb-4 text-center text-2xl font-bold text-gray-800'>
					Encuentra un beneficio a tu medida
				</p>
			</div>
			<Carousel
				arrows={false}
				autoPlay={false}
				centerMode={false}
				className='react-multi-carousel-list z-20 flex h-[150px] w-full flex-row pl-[8px] sm:max-w-[370px] sm:pl-[3%] md:max-w-[650px] lg:max-w-[860px] xl:max-w-[1296px] lp:max-w-[1080px]'
				customButtonGroup={<ButtonGroup />}
				focusOnSelect={false}
				renderArrowsWhenDisabled={false}
				responsive={utils.responsive}
				rewind={false}
				rewindWithAnimation={false}
				showDots={false}
				infinite
				keyBoardControl
				pauseOnHover
				renderButtonGroupOutside
				shouldResetAutoplay
				swipeable
			>
				{data?.map(item => (
					<div
						aria-hidden='true'
						key={item.id}
						onClick={() => handleRedirect(item)}
					>
						<BenefitFilterCard
							color={item.color}
							logoType={item.logo}
							name={item.name}
						/>
					</div>
				))}
			</Carousel>
		</div>
	)
}

export default memo(Filters)
