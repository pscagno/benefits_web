import DeleteIcon from '@mui/icons-material/Delete'

const useColumns = ({ handleDelete, handleEdit }) => [
	{ id: 'averageQualification', label: 'Calificación' },
	{ id: 'id', label: 'ID', align: 'left' },
	{ id: 'title', label: 'Título', align: 'left' },
	{ id: 'categoryName', label: 'Categoría', align: 'left' },
	{ id: 'subcategoryName', label: 'Subcategoría', align: 'left' },
	{ id: 'userCreation', label: 'Creado Por', align: 'left' },
	{
		id: 'dateCreation',
		label: 'Fecha de Creación',
		align: 'left',
		render(rowData) {
			const date = new Date(rowData.dateCreation)
			return date.toLocaleDateString()
		}
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
	// {
	//   id: 'action',
	//   label: 'Detalle',
	//   align: 'center',
	//   render: (rowData) => (
	//     <EditIcon className='cursor-pointer' onClick={handleEdit} />
	//   ),
	// },
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
