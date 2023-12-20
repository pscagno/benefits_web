import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import useMediaQuery from 'Utils/mediaQuery'
import BenefitCardDesktop from 'components/BenefitCard/BenefitCardDesktop'
import BenefitCardMobile from 'components/BenefitCard/BenefitCardMobile'
import type { State } from 'components/BenefitCard/types'
import BenefitCardSkeleton from 'components/BenefitCardSkeleton'
import Button from 'components/Button'
import useGetBenefits from 'components/CardsBenefits/hooks/useGetBenefits'
import Loading from 'components/Loading/Loading'
import type { Props } from 'types/cardBenefits'

function BenefitsCards({
	header,
	bg,
	headerSize,
	getBenefits,
	keyQueryName,
	id
}: Props) {
	// TODO zeque tenes que revisar esto
	const {
		benefitsIsLoading,
		benefitsResponse,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage
	} = useGetBenefits(getBenefits, keyQueryName, id)
	const navigate = useNavigate()
	const mobile = useMediaQuery({ query: '(max-width: 768px)' })

	const onClickRedirectDetailButton = useCallback(
		(id: number, state: State) => {
			const {
				nameBenefitsCard,
				imageList,
				title,
				description,
				bgColor,
				userFavorite
			} = state
			navigate(`/benefit/${id}`, {
				state: {
					nameBenefitsCard,
					imageList,
					title,
					description,
					bgColor,
					id,
					userFavorite
				}
			})
		},
		[navigate]
	)

	const handleLoadMore = async () => {
		await fetchNextPage()
	}

	return (
		<section className={`h-auto w-full sm:pt-20 md:pt-0 ${bg}`}>
			{headerSize === 'base' ? (
				<h2 className='py-[66px] text-center font-TitilliumWeb text-[32px] font-[600] leading-normal text-primary-description sm:hidden md:block'>
					{header}
				</h2>
			) : (
				<h1 className="font-['Titillium Web'] py-[50px] text-center text-[42px] font-[600] leading-normal text-primary-description">
					{header}
				</h1>
			)}
			<div className='grid place-content-center'>
				{benefitsResponse?.length === 0 && (
					<h1 className='text-[20px] font-[600] leading-normal text-primary-description'>
						🚧 Aún no hay beneficios disponibles 🚧
					</h1>
				)}
				{benefitsIsLoading ? (
					<BenefitCardSkeleton cards={8} />
				) : (
					<>
						<div className='mx-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4 lp:grid-cols-3'>
							{benefitsResponse?.map(card =>
								mobile ? (
									<BenefitCardMobile
										bgColor={card.categoryColor}
										description={card.description}
										id={card.id}
										imageList={card.imageList}
										key={card.id}
										keyQueryName={keyQueryName}
										nameBenefitsCard={card.categoryName}
										onClickButton={onClickRedirectDetailButton}
										qualification={card.qualification}
										title={card.title}
										userFavorite={card.userFavorite}
									/>
								) : (
									<BenefitCardDesktop
										bgColor={card.categoryColor}
										description={card.description}
										id={card.id}
										imageList={card.imageList}
										key={card.id}
										keyQueryName={keyQueryName}
										nameBenefitsCard={card.categoryName}
										onClickButton={onClickRedirectDetailButton}
										qualification={card.qualification}
										title={card.title}
										userFavorite={card.userFavorite}
									/>
								)
							)}
						</div>
						<div className='mx-auto my-[28px]'>
							{hasNextPage && (
								<Button
									icon={isFetchingNextPage ? <Loading /> : undefined}
									onClick={handleLoadMore}
									paddingY={isFetchingNextPage ? 'py-0 pt-[5px]' : ''}
									text={isFetchingNextPage ? undefined : 'Ver más beneficios'}
								/>
							)}
						</div>
					</>
				)}
			</div>
		</section>
	)
}

export default BenefitsCards
