/* eslint-disable react/no-array-index-key */
import { memo, useState } from 'react'

import usePostQualification from 'api/postQualification'
import RatingStarIcon from 'assets/RatingStarIcon/RatingStarIcon'

const RATING_MAX_VALUE = 5

interface Props {
	benefitId: number
	qualification: number
}

function Rating({ benefitId, qualification }: Props) {
	const [hover, setHover] = useState(-1)
	const [rating, setRating] = useState(qualification - 1)

	const { mutate: postQualification } = usePostQualification()

	const handleStarClick = async (index: number) => {
		setRating(index)
		postQualification({ index, benefitId })
	}

	if (rating === -1) {
		return (
			<div className='frow'>
				{Array.from({ length: RATING_MAX_VALUE }).map((_, index) => (
					<button
						className='pr-3 outline-2 outline-black'
						key={index}
						onClick={async () => handleStarClick(index)}
						onMouseEnter={() => setHover(index)}
						onMouseLeave={() => setHover(-1)}
						type='button'
					>
						<span>
							<RatingStarIcon index={index} rating={hover} />
						</span>
					</button>
				))}
			</div>
		)
	}

	return (
		<div className='frow'>
			{Array.from({ length: RATING_MAX_VALUE }).map((_, index) => (
				<span className='pr-3 outline-2 outline-black' key={index}>
					<RatingStarIcon index={index} rating={rating} />
				</span>
			))}
		</div>
	)
}
export default memo(Rating)
