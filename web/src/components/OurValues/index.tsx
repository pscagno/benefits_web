import { useQuery } from '@tanstack/react-query'

import getValues from 'api/getValues'

import CardValues from './components/cardValues'

function OurValues() {
	const { isLoading, error, data } = useQuery(['OurValues'], getValues)

	if (isLoading) <p>Loading...</p>
	if (error) <p>No se pudo cargar la sección...</p>

	const createValueColumns = (startIndex: number, endIndex: number) => (
		<div className='flex flex-col items-center justify-center gap-[60px] sm:gap-[80px] md:flex-row md:gap-[150px] lg:flex-row lg:gap-[150px] xl:flex-row xl:gap-[217px] lp:flex-row lp:gap-[150px]'>
			{data
				?.slice(startIndex, endIndex)
				.map(card => (
					<CardValues
						color={card.color}
						icon={card.icon}
						key={card.id}
						textValue={card.textValue}
					/>
				))}
		</div>
	)

	return (
		<div className='flex h-full w-full flex-col bg-zinc-100'>
			<h2 className='pt-[36px] text-center font-TitilliumWeb text-xl font-[600] leading-normal text-primary-description sm:pb-[0px] xl:pt-[59px]'>
				Nuestros Valores
			</h2>
			<div className='relative flex h-[full] w-full flex-col justify-center gap-[60px] py-[59px] sm:flex-col sm:gap-[80px] md:flex-col md:gap-[50px] lg:flex-row  lg:gap-[150px] xl:flex-row xl:gap-[217px] lp:flex-row lp:gap-[150px]'>
				{createValueColumns(0, 2)}
				{createValueColumns(2, 4)}
			</div>
		</div>
	)
}

export default OurValues
