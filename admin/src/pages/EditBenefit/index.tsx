import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';

import { useGetSubCategories } from 'hooks/useGetSubCategories';
import viewStyles from 'styles/viewStyles';

import BANNER_BENEFITS from '../../assets/images/banner-benefits.png';
import Banner from '../../components/Banner';
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import BenefitForm from './components/BenefitForm';
import useEditBenefit from './hooks/useEditBenefit';
import useFindBenefit from './hooks/useFindBenefit';

function EditBenefit() {
  const { benefitId } = useParams<{ benefitId: string }>();
  const { data: subCategories, isLoading: isLoadingSubCategories } = useGetSubCategories();
  const { data: benefit, isLoading: isLoadingBenefit, isError } = useFindBenefit(Number.parseInt(benefitId));
  const { mutate: editBenefit } = useEditBenefit();

  const handleEditBenefit = (benefitData) => {
    editBenefit({ ...benefitData, id: Number.parseInt(benefitId) });
  };

  if (isLoadingBenefit || isLoadingSubCategories) return <Loading />;
  if (isError) return <ErrorMessage message='Ocurrió un error al cargar el beneficio.' />;

  return (
    <Box sx={viewStyles.container}>
      <Banner
        image={BANNER_BENEFITS}
        subtitle='Edita los beneficios de tu empresa desde aquí'
        title='Editar Beneficio'
      />
      <BenefitForm initialData={benefit} onSubmit={handleEditBenefit} subCategories={subCategories} />
    </Box>
  );
}

export default EditBenefit;
