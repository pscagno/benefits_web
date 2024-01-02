import { TablePagination } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useState } from 'react'

import tableStyles from './styles'
import type { BasicTableProps } from './types'

export default function BasicTable({ data, columns }: BasicTableProps) {
	const [page, setPage] = useState(0)

	// TODO: add pagination from LN
	const handleChangePage = (selectedPage: number) => {
		setPage(selectedPage)
	}

	return (
		<TableContainer
			component={Paper}
			style={{ overflowX: 'auto', ...tableStyles.container }}
		>
			<Table aria-label='simple table' sx={tableStyles.table}>
				<TableHead>
					<TableRow sx={tableStyles.headRow}>
						{columns.map(column => (
							<TableCell
								align={column.align}
								key={column.id}
								sx={tableStyles.headerCell}
							>
								{column.label}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row, rowIndex) => (
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
				onPageChange={handleChangePage}
				page={page}
				rowsPerPage={8}
				rowsPerPageOptions={[]}
			/>
		</TableContainer>
	)
}
