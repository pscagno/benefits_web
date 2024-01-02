import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TableSortLabel
} from '@mui/material'
import TablePagination from '@mui/material/TablePagination'
import type React from 'react'
import { useState } from 'react'

import tableStyles from './styles'

// Definir las interfaces y tipos necesarios
interface Data {
	id: number
	// Define tus propiedades de datos aquí...
}

interface Column {
	id: keyof Data
	label: string
	align?: 'center' | 'left' | 'right'
	render?: (data: Data) => React.ReactNode
	sortable?: boolean
}

interface AdvancedTableProps {
	data: Data[]
	columns: Column[]
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
	if (b[orderBy] < a[orderBy]) {
		return -1
	}
	if (b[orderBy] > a[orderBy]) {
		return 1
	}
	return 0
}

type Order = 'asc' | 'desc'

function getComparator<Key extends keyof any>(
	order: Order,
	orderBy: Key
): (
	a: { [key in Key]: number | string },
	b: { [key in Key]: number | string }
) => number {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy)
}

export default function SortableTable({ data, columns }: AdvancedTableProps) {
	const [page, setPage] = useState(0)
	const [order, setOrder] = useState<Order>('asc')
	const [orderBy, setOrderBy] = useState<keyof Data>('')
	const rowsPerPage = 5 // Puedes ajustar esto según tus necesidades

	const handleRequestSort = (property: keyof Data) => {
		const isAsc = orderBy === property && order === 'asc'
		setOrder(isAsc ? 'desc' : 'asc')
		setOrderBy(property)
		setPage(0) // Volver a la primera página al cambiar la ordenación
	}

	return (
		<TableContainer
			component={Paper}
			style={{ overflowX: 'auto', ...tableStyles.container }}
		>
			<Table aria-label='simple table' sx={tableStyles.table}>
				<TableHead>
					<TableRow>
						{columns.map(column => (
							<TableCell
								align={column.align}
								key={column.id}
								sx={tableStyles.headerCell}
							>
								{column.sortable ? (
									<TableSortLabel
										active={orderBy === column.id}
										direction={orderBy === column.id ? order : 'asc'}
										onClick={() => handleRequestSort(column.id)}
										sx={tableStyles['Mui-active']}
									>
										{column.label}
									</TableSortLabel>
								) : (
									column.label
								)}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{[...data]
						.sort(getComparator(order, orderBy))
						.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
						.map((row, rowIndex) => (
							<TableRow
								key={row.id}
								sx={rowIndex % 2 ? tableStyles.oddRow : tableStyles.evenRow}
							>
								{columns.map(column => (
									<TableCell
										align={column.align}
										key={column.id}
										sx={tableStyles.cell}
									>
										{column.render ? column.render(row) : row[column.id]}
									</TableCell>
								))}
							</TableRow>
						))}
				</TableBody>
			</Table>
			<TablePagination
				component='div'
				count={data.length}
				onPageChange={(event, newPage) => setPage(newPage)}
				page={page}
				rowsPerPage={rowsPerPage}
				rowsPerPageOptions={[]}
			/>
		</TableContainer>
	)
}
