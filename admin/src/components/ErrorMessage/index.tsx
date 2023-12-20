import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

function ErrorMessage({ message }: { message: string }) {
  return (
    <Box alignItems="center" display="flex" justifyContent="center" minHeight="100vh">
      <Alert severity="error">{message}</Alert>
    </Box>
  );
}

export default ErrorMessage;
