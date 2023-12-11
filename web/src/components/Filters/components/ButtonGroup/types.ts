export interface CarouselState {
	currentSlide: number
}

export interface Props {
	next?: () => void
	previous?: () => void
	carouselState?: CarouselState
}
