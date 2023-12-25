import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

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
		label: 'Editar',
		align: 'center',
		render: rowData => (
			<EditIcon
				className='cursor-pointer'
				onClick={() => handleEdit(rowData.id)}
			/>
		)
	},
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
