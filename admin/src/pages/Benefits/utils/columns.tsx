import DeleteIcon from '@mui/icons-material/Delete';

const useColumns = ({ handleDelete, handleEdit }) => ([
  { id: 'id', label: 'ID', align: 'left' },
  { id: 'title', label: 'Título', align: 'left' },
  { id: 'categoryName', label: 'Categoría', align: 'left' },
  { id: 'subcategoryName', label: 'Subcategoría', align: 'left' },
  { id: 'userCreation', label: 'Creado Por', align: 'left' },
  { id: 'dateCreation', 
    label: 'Fecha de Creación',
    align: 'left',
    render(rowData) {
      const date = new Date(rowData.dateCreation);
      return date.toLocaleDateString();
    }
  },
  { id: 'link', label: 'Enlace', align: 'left' },
  // {
  //   id: 'action',
  //   label: 'Detalle',
  //   align: 'center',
  //   render: (rowData) => (
  //     <EditIcon onClick={handleEdit} />
  //   ),
  // },
  {
    id: 'action',
    label: 'Eliminar',
    align: 'center',
    render: (rowData) => (
      <DeleteIcon onClick={() => handleDelete(rowData.id)} />
    ),
  },
]);

export default useColumns;