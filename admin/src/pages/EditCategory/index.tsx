import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import BANNER_CATEGORIES from 'assets/images/banner-categories.png';
import Banner from 'components/Banner';
import ErrorMessage from 'components/ErrorMessage';
import Loading from 'components/Loading';
import viewStyles from 'styles/viewStyles';

import CategoryForm from './components/CategoryForm';
import useEditCategory from './hooks/useEditCategory'; // Adapt useCreateCategory for editing
import { useFindCategory } from './hooks/useFindCategory'; // You need to create this hook

function EditCategory() {
  const { categoryId } = useParams();
  const { data: category, isLoading, isError, error } = useFindCategory(categoryId);
  const [initialData, setInitialData] = useState(null);
  const { mutate: editCategory } = useEditCategory();

  useEffect(() => {
    if (category) {
      setInitialData({ ...category });
    }
  }, [category]);

  const handleEditCategory = (categoryData) => {
    editCategory(categoryData);
  };

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage message={error || 'Ocurrió un error'} />;

  return (
    <Box sx={viewStyles.container}>
      <Banner
        image={BANNER_CATEGORIES}
        subtitle='Edita las categorías para tus beneficios desde aquí'
        title='Editar Categoría'
      />
      {initialData && (
        <CategoryForm initialData={initialData} onSubmit={handleEditCategory} />
      )}
    </Box>
  );
}

export default EditCategory;
