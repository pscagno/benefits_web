import getCards from 'api/getCards'
import BenefitsCards from 'components/CardsBenefits'
import Filters from 'components/Filters'

import HeaderCarousel from './components/HeaderCarousel'
import Partners from './components/Partners'
import SliderMid from './components/SliderMid'

function Home() {
	return (
		<div className='h-full bg-white'>
			<div className='h-50 min-h-[50px]'>HEADER</div>
			<HeaderCarousel />
			<div className='flex w-full justify-center'>
				<Filters />
			</div>
			<BenefitsCards
				bg='bg-[#F0F0F0]'
				getBenefits={getCards}
				header='Beneficios destacados en tu zona'
				headerSize='base'
				keyQueryName='benefitsHome'
			/>
			<SliderMid />
			<Partners />
		</div>
	)
}

export default Home
