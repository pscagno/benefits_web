import { Box, Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

import type { ProvinceFormData } from '../../types';

function ProvinceForm({ onSubmit, initialData }: { onSubmit: (data: ProvinceFormData) => void; initialData?: ProvinceFormData }) {
  const [provinceData, setProvinceData] = useState<ProvinceFormData>({
    id: initialData?.id || 0,
    name: initialData?.name || '',
  });

  useEffect(() => {
    if (initialData) {
      setProvinceData(initialData);
    }
  }, [initialData]);

  const handleChange = event => {
    const { name, value } = event.target;
    setProvinceData({ ...provinceData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(provinceData);
  };

	return (
		<Box
			component='form'
			onSubmit={handleSubmit}
			paddingY={8}
			style={{ display: 'flex', flexDirection: 'column' }}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					width: '100%',
					maxWidth: '1000px',
					margin: 'auto',
					backgroundColor: 'white',
					padding: 16,
					borderRadius: 4,
					marginTop: -16,
					boxShadow: '0px 4px 15px 0px #00000026',
					zIndex: 1,
					'@media (max-width: 600px)': {
						width: '90%',
						padding: 4
					}
				}}
			>
				<TextField
					label='Provincia'
					margin='normal'
					name='name'
					onChange={handleChange}
					value={provinceData.name}
				/>
				<Button
					color='primary'
					sx={{ marginTop: 2 }}
					type='submit'
					variant='contained'
				>
					Actualizar Provincia
				</Button>
			</Box>
		</Box>
	)
}

export default ProvinceForm
