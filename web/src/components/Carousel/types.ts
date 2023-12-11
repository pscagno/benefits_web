import type { ResponsiveType } from 'react-multi-carousel'

export interface Props {
	children: React.ReactNode
	arrows?: boolean
	autoPlay?: boolean
	draggable?: boolean
	infinite?: boolean
	keyBoardControl?: boolean
	pauseOnHover?: boolean
	shouldResetAutoplay?: boolean
	showDots?: boolean
	swipeable?: boolean
	responsive: ResponsiveType
	customClassContainer?: string
	customClassArrows?: string
}
