/* eslint-disable react/no-array-index-key */
// eslint-disable-next-line import/no-extraneous-dependencies
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function BenefitCardSkeleton({ cards }: { cards: number }) {
	return (
		<div className='mx-4 mb-14 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4 lp:grid-cols-3'>
			{Array.from({ length: cards }).map((_, index) => (
				<div
					className='benefit-card relative block h-[500] w-[306px] cursor-default rounded-[10px] p-2 shadow'
					key={index}
					style={{ backgroundColor: '#fafafa75' }}
				>
					<SkeletonTheme highlightColor='#6d6d6d29'>
						<Skeleton
							borderRadius={10}
							className='bottom-1 block '
							height={206}
						/>
						<div className='px-[4%] pt-4'>
							<Skeleton className='mb-2' height={22} />
							<Skeleton className='mb-[12px]' height={22} width={80} />
							<Skeleton className='mt-[6px]' count={2} height={15} />
							<div className='fcenter'>
								<Skeleton
									borderRadius={50}
									className='mb-[23px] mt-[12px]'
									height={40}
									width={144}
								/>
							</div>
						</div>
					</SkeletonTheme>
				</div>
			))}
		</div>
	)
}
