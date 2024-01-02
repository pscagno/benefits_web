import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

const useColumns = ({ handleDelete, handleEdit }) => [
	{ id: 'averageQualification', label: 'Calificación', sortable: true },
	{ id: 'id', label: 'ID', align: 'left', sortable: true },
	{ id: 'title', label: 'Título', align: 'left', sortable: true },
	{ id: 'categoryName', label: 'Categoría', align: 'left', sortable: true },
	{
		id: 'subcategoryName',
		label: 'Subcategoría',
		align: 'left',
		sortable: true
	},
	{ id: 'userCreation', label: 'Creado Por', align: 'left', sortable: true },
	{
		id: 'dateCreation',
		label: 'Fecha de Creación',
		align: 'left',
		render(rowData) {
			const date = new Date(rowData.dateCreation)
			return date.toLocaleDateString()
		},
		sortable: true
	},
	{
		id: 'link',
		label: 'Enlace',
		align: 'left',
		render: rowData => (
			<a
				className='hoover:cursor-pointer text-blue-600 underline visited:text-purple-600'
				href={`https://www.${rowData.link}`}
			>
				{rowData.link}
			</a>
		)
	},
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
