import DeleteIcon from '@mui/icons-material/Delete'

const useColumns = ({ handleDelete, handleEdit }) => [
	{ id: 'id', label: 'ID', align: 'left' },
	{ id: 'name', label: 'Nombre', align: 'left' },
	{
		id: 'province',
		label: 'Provincia',
		align: 'left',
		render: rowData => rowData.province.name
	},
	{
		id: 'action',
		label: 'Eliminar',
		align: 'center',
		render: rowData => <DeleteIcon onClick={() => handleDelete(rowData.id)} />
	}
]

export default useColumns
