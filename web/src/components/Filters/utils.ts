const DESKTOP_MAX = 3000
const DESKTOP_MIN = 1500
const DESKTOP_ITEMS = 6

const LAPTOP_MAX = 1500
const LAPTOP_MIN = 1280
const LAPTOP_ITEMS = 5

const TABLET_MAX = 1280
const TABLET_MIN = 1024
const TABLET_ITEMS = 4

const MOBILE_MAX = 1024
const MOBILE_MIN = 0
const MOBILE_ITEMS = 3

const responsive = {
	desktop: {
		breakpoint: { max: DESKTOP_MAX, min: DESKTOP_MIN },
		items: DESKTOP_ITEMS
	},
	laptop: {
		breakpoint: { max: LAPTOP_MAX, min: LAPTOP_MIN },
		items: LAPTOP_ITEMS
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

export default {
	responsive
}
