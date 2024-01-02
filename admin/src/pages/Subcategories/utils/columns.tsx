import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

const useColumns = ({ handleDelete, handleEdit }) => [
	{ id: 'id', label: 'ID', align: 'left', sortable: true },
	{ id: 'name', label: 'Región', align: 'left', sortable: true },
	{ id: 'province', label: 'Provincia', align: 'left', sortable: true },
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
