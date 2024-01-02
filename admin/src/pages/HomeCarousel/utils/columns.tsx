import DeleteIcon from '@mui/icons-material/Delete'

const useColumns = ({ handleDelete }) => [
	{ id: 'id', label: 'ID', align: 'left', sortable: true },
	{
		id: 'action',
		label: 'Eliminar',
		align: 'center',
		render: rowData => (
			<DeleteIcon
				className='cursor-pointer'
				onClick={() => handleDelete(rowData.id)}
			/>
		)
	}
]

export default useColumns
