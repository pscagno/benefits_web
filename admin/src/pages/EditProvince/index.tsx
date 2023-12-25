import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';

import ErrorMessage from 'components/ErrorMessage';
import Loading from 'components/Loading';
import viewStyles from 'styles/viewStyles';

import BANNER_PROVINCES from '../../assets/images/banner-provinces.png';
import Banner from '../../components/Banner';
import ProvinceForm from './components/ProvinceForm';
import useEditProvince from './hooks/useEditProvince';
import { useFindProvince } from './hooks/useFindProvince';
import type { ProvinceFormData } from './types';

function EditProvince() {
  const { provinceId } = useParams<{ provinceId: string }>();

  const { data: province, isLoading, isError, error, isSuccess } = useFindProvince(provinceId);

  const { mutate: editProvince } = useEditProvince();

  const handleEditProvince = (provinceData: ProvinceFormData) => {
    const dataWithId = { ...provinceData, id: provinceId };
    editProvince(dataWithId);
  };

  if (isLoading) return <Loading />;

  if (isError) return <ErrorMessage message={error?.message || 'Ocurrió un error al cargar la provincia.'} />;

  if (isSuccess && province) {
    return (
      <Box sx={viewStyles.container}>
        <Banner
          image={BANNER_PROVINCES}
          subtitle='Edita las provincias para tus beneficios desde aquí'
          title='Editar Provincia'
        />
        <ProvinceForm initialData={province} onSubmit={handleEditProvince} />
      </Box>
    );
  }

  return null;
}

export default EditProvince;
