const DESKTOP_MAX = 3000
const DESKTOP_MIN = 1024
const DESKTOP_ITEMS = 1

const TABLET_MAX = 1024
const TABLET_MIN = 464
const TABLET_ITEMS = 1

const MOBILE_MAX = 464
const MOBILE_MIN = 0
const MOBILE_ITEMS = 1

const responsive = {
	desktop: {
		breakpoint: { max: DESKTOP_MAX, min: DESKTOP_MIN },
		items: DESKTOP_ITEMS
	},
	tablet: {
		breakpoint: { max: TABLET_MAX, min: TABLET_MIN },
		items: TABLET_ITEMS
	},
	mobile: {
		breakpoint: { max: MOBILE_MAX, min: MOBILE_MIN },
		items: MOBILE_ITEMS
	}
}

export default responsive
