import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

function LoadingSpinner() {
  return (
    <Box alignItems="center" display="flex" justifyContent="center" minHeight="100vh">
      <CircularProgress />
    </Box>
  );
}

export default LoadingSpinner;
