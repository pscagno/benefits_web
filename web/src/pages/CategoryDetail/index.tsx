import { memo } from 'react'
import { useParams } from 'react-router-dom'

import useMediaQuery from 'Utils/mediaQuery'
import getBenefitsByCategory from 'api/getBenefitsByCategory'
import getBenefitsBySubcategory from 'api/getBenefitsBySubcategory'
import BenefitsCards from 'components/CardsBenefits'
import Loading from 'components/Loading/Loading'
import Partners from 'pages/Home/components/Partners'

import useGetCategoryById from './useGetCategoryById'

function CategoryDetail() {
	const mobile = useMediaQuery({ query: '(max-width: 768px)' })

	const { id, subcategoryId } = useParams()
	const numberCategoryId = id ? Number.parseInt(id, 10) : 0
	const numberSubcategoryId = subcategoryId
		? Number.parseInt(subcategoryId, 10)
		: 0

	const { data: categoryData } = useGetCategoryById(numberCategoryId)
	const isSubcategory = !!subcategoryId

	if (categoryData === undefined) {
		return <Loading />
	}

	const { imageHeader, imageHeaderMobile, color, name, subcategories } =
		categoryData

	const subcategoryName = subcategories.find(
		subcategory => subcategory.id === numberSubcategoryId
	)?.name

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
					className='h-ful uppercase; flex w-full justify-center font-TitilliumWeb text-[22px] font-semibold leading-[3.625rem] text-white sm:text-[20px]'
					style={{
						backgroundColor: color
					}}
				>
					{subcategoryName ? `${name} - ${subcategoryName}` : name}
				</div>
			</div>
			<div className='container-benefitTextName w-full'>
				<div className='h-ful flex w-full justify-center font-TitilliumWeb text-[22px] font-semibold leading-[3.625rem] text-primary-description'>
					<p className='px-4 text-center'>
						Encuentra un beneficio de {name.toLowerCase()}
					</p>
				</div>
			</div>
			<div className='mt-[-60px]'>
				<BenefitsCards
					bg='bg-[#FFFFFF]'
					getBenefits={
						isSubcategory ? getBenefitsBySubcategory : getBenefitsByCategory
					}
					header={`Encuentra un beneficio de ${
						subcategoryName ? `${name} - ${subcategoryName}` : name
					}`}
					headerSize='base'
					id={isSubcategory ? numberSubcategoryId : numberCategoryId}
					keyQueryName={subcategoryName ? `${name} - ${subcategoryName}` : name}
				/>
			</div>
			<hr />
			<Partners />
		</div>
	)
}

export default memo(CategoryDetail)
