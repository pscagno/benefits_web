import OurValuesData from 'components/OurValues/components/cardValues/mock'

async function getValues() {
	await new Promise(resolve => {
		setTimeout(resolve, 1500)
	})

	return OurValuesData
}

export default getValues
