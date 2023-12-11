import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import useMediaQuery from 'Utils/mediaQuery'
import getCards from 'api/getCards'
import getCategoryById from 'api/getCategoryById'
import BenefitsCards from 'components/CardsBenefits'
import Loading from 'components/Loading/Loading'
import OurValues from 'components/OurValues'
import SearchInput from 'components/SearchInput'
import Partners from 'pages/Home/components/Partners'
import type { Category } from 'types/category'

function CategoryDetail() {
	const mobile = useMediaQuery({ query: '(max-width: 768px)' })
	const { id } = useParams()

	const numberId = id ? Number.parseInt(id, 10) : 0
	const { data: categoryData } = useQuery(
		['category', numberId],
		getCategoryById
	)
	const { data: cardsData } = useQuery(['benefitsCards'], getCards)

	if (cardsData === undefined || categoryData === undefined) {
		return <Loading />
	}

	console.log(cardsData)

	const { imageHeader, imageHeaderMobile, color, name } =
		categoryData as Category

	return (
		<div className='mt-[81px] h-full w-full bg-white'>
			<div className='container-image w-full'>
				<img
					alt='a'
					className='w-full'
					src={`data:image/png;base64,${
						mobile ? imageHeaderMobile : imageHeader
					}`}
				/>
			</div>
			<div className='container-benefitName relative mb-8 w-full'>
				<div
					className='h-ful uppercase; flex w-full justify-center font-TitilliumWeb text-[22px] font-semibold leading-[3.625rem] text-white'
					style={{
						backgroundColor: color
					}}
				>
					{name}
				</div>
			</div>
			<div className='container-searchInput mb-8 flex h-[15%] w-full items-center justify-center'>
				<div className='w-full sm:w-[636px]'>
					<SearchInput />
				</div>
			</div>
			<div className='container-benefitTextName mb-8 w-full'>
				<div className='h-ful flex w-full justify-center font-TitilliumWeb text-[22px] font-semibold leading-[3.625rem] text-primary-description'>
					<p>Encuentra un beneficio de</p>
					<p className='pl-[5px] lowercase'>{name}</p>
				</div>
			</div>
			<BenefitsCards data={cardsData} />

			<Partners />
			<OurValues />
		</div>
	)
}

export default CategoryDetail
