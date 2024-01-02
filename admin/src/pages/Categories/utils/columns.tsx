import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

const useColumns = ({ handleDelete, handleEdit }) => [
	{ id: 'id', label: 'ID', align: 'left', sortable: true },
	{ id: 'name', label: 'Nombre', align: 'left', sortable: true },
	{ id: 'orderInMenu', label: 'Orden', align: 'left', sortable: true },
	{ id: 'color', label: 'Color', align: 'left' },
	// { id: 'imageMenu', label: 'Imagen', align: 'left' },
	// { id: 'subcategories', label: 'Subcategorías', align: 'left' },
	{
		id: 'action',
		label: 'Detalle',
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
