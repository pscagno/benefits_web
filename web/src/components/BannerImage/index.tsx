import { memo } from 'react'

import type { Props } from './types'

function BannerImage({ image, imageMobile, altImage }: Props) {
	return (
		<>
			<img
				alt={altImage}
				className='h-[500px] w-full bg-no-repeat object-cover object-center sm:hidden'
				src={image}
			/>
			<img
				alt={altImage}
				className='hidden h-[500px] w-full bg-no-repeat object-cover object-center sm:block '
				src={imageMobile}
			/>
		</>
	)
}

export default memo(BannerImage)
