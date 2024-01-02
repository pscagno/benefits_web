import Box from '@mui/material/Box'

import BANNER_BENEFITS from 'assets/images/banner-benefits.png'
import Banner from 'components/Banner'
import ErrorMessage from 'components/ErrorMessage'
import Loading from 'components/Loading'
import SortableTable from 'components/SortableTable'
import { useGetBenefitsByRating } from 'hooks/useGetBenefitsbyRating'
import useSearch from 'hooks/useSearch'
import type { DataItem } from 'hooks/useSearch/types'
import viewStyles from 'styles/viewStyles'

import useColumns from './utils/columns'

function RatingReport() {
	const { data, isSuccess, isLoading, isError } = useGetBenefitsByRating() // TODO crear su hook cuando este el EP
	const columns = useColumns()

	const arrayToFilter: (keyof DataItem)[] = ['title']

	const { filteredDataHook, SearchInput } = useSearch(
		data,
		arrayToFilter,
		'Buscar por Nombre'
	)

	// const sortedData = [...filteredDataHook].sort(
	// 	(a, b) => b.averageQualification - a.averageQualification
	// )

	if (isLoading) return <Loading />

	if (isError)
		return <ErrorMessage message='Ocurrió un error al cargar los beneficios.' />

	if (isSuccess) {
		return (
			<Box sx={viewStyles.container}>
				<Banner
					image={BANNER_BENEFITS}
					subtitle='Analiza tus beneficios desde aquí'
					title='Calificación de beneficios'
				/>
				{SearchInput}
				<SortableTable
					columns={columns}
					data={filteredDataHook}
					order='asc'
					orderBy='name'
				/>
			</Box>
		)
	}
}

export default RatingReport
