// EditSubcategory.tsx
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';

import BANNER_CATEGORIES from 'assets/images/banner-categories.png';
import Banner from 'components/Banner';
import ErrorMessage from 'components/ErrorMessage';
import Loading from 'components/Loading';
import { useGetCategories } from 'hooks/useGetCategories';
import viewStyles from 'styles/viewStyles';

import SubcategoryForm from './components/SubcategoryForm';
import useEditSubcategory from './hooks/useEditSubcategory'; // Implement this hook
import { useFindSubcategory } from './hooks/useFindSubcategory'; // Implement this hook
import type { SubcategoryFormData } from './types';

function EditSubcategory() {
  const { subcategoryId } = useParams<{ subcategoryId: string }>();
  const { data: subcategory, isLoading: isLoadingSubcategory, isError: isErrorSubcategory } = useFindSubcategory(Number.parseInt(subcategoryId, 10));
  const { data: categories, isSuccess: isSuccessCategories, isLoading: isLoadingCategories, isError: isErrorCategories } = useGetCategories();
  const { mutate: editSubcategory } = useEditSubcategory();

  const handleEditSubcategory = (subcategoryData: SubcategoryFormData) => {
    editSubcategory({ ...subcategoryData, id: Number.parseInt(subcategoryId, 10) });
  };

  if (isLoadingSubcategory || isLoadingCategories) return <Loading />;
  if (isErrorSubcategory || isErrorCategories) return <ErrorMessage message='Ocurrió un error al cargar los datos.' />;
  if (!subcategory) return <ErrorMessage message='Subcategoría no encontrada.' />;
  if (isSuccessCategories) {
    return (
      <Box sx={viewStyles.container}>
        <Banner
          image={BANNER_CATEGORIES}
          subtitle='Edita las subcategorías para tus beneficios desde aquí'
          title='Editar Subcategoría'
        />
        <SubcategoryForm
          categories={categories}
          initialData={subcategory}
          onSubmit={handleEditSubcategory}
        />
      </Box>
    );
  }
}

export default EditSubcategory;
