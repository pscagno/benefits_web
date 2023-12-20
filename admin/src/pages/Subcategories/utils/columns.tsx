import DeleteIcon from '@mui/icons-material/Delete'

const useColumns = ({ handleDelete }) => [
	{ id: 'id', label: 'ID', align: 'left' },
	{ id: 'name', label: 'Ciudad', align: 'left' },
	{
		id: 'action',
		label: 'Eliminar',
		align: 'center',
		render: rowData => <DeleteIcon onClick={() => handleDelete(rowData.id)} />
	}
]

export default useColumns
