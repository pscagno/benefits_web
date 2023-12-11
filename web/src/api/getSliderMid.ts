/* eslint-disable @typescript-eslint/no-magic-numbers */
import SliderMidImage from 'pages/Home/components/SliderMid/mockSliderMid'

async function getSliderImage() {
	await new Promise(resolve => {
		setTimeout(resolve, 1500)
	})

	return SliderMidImage
}

export default getSliderImage
