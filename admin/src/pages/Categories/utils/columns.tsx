import DeleteIcon from '@mui/icons-material/Delete';

const useColumns = ({ handleDelete, handleEdit }) => ([
  { id: 'id', label: 'ID', align: 'left' },
  { id: 'name', label: 'Nombre', align: 'left' },
  { id: 'orderInMenu', label: 'Orden', align: 'left' },
  { id: 'color', label: 'Color', align: 'left' },
  // { id: 'imageMenu', label: 'Imagen', align: 'left' },
  // { id: 'subcategories', label: 'Subcategorías', align: 'left' },
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