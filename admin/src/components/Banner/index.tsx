import { Box, Typography } from '@mui/material';

import type BannerProps from './types';

function Banner({ title, subtitle, image }: BannerProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 500,
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        color: 'white',
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '20px',
          borderRadius: '4px',
        }}
      >
        <Typography component="h1" variant="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h6">
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
}

export default Banner;
