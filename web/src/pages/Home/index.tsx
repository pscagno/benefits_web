import { useQuery } from '@tanstack/react-query'

import getCards from 'api/getCards'
import BenefitsCards from 'components/CardsBenefits'
import Filters from 'components/Filters'
import Loading from 'components/Loading/Loading'
import OurValues from 'components/OurValues'
import SearchInput from 'components/SearchInput'

import HeaderCarousel from './components/HeaderCarousel'
import Partners from './components/Partners'
import SliderMid from './components/SliderMid'

function Home() {
	const { data } = useQuery(['benefitsCards'], getCards)

	if (data === undefined) {
		return <Loading />
	}

	return (
		<div className='h-full bg-white'>
			<div className='h-50 min-h-[50px]'>HEADER</div>

			<HeaderCarousel />

			<div className='flex flex-col items-center'>
				<SearchInput />
			</div>

			<div className='mb-[50px] flex w-full justify-center'>
				<Filters />
			</div>
			<BenefitsCards
				bg='bg-[#F0F0F0]'
				data={data}
				header='Beneficios destacados en tu zona'
				headerSize='base'
			/>
			<SliderMid />
			<Partners />
			<OurValues />
			<div className='w-50 min-h-[50px]'>FOOTER</div>
		</div>
	)
}

export default Home
