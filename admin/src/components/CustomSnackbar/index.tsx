import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import type { CustomSnackbarProps } from './types';

function CustomSnackbar({ index, notification, removeNotification }: CustomSnackbarProps) {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      autoHideDuration={8000}
      key={index}
      onClose={() => removeNotification(index)}
      open={notification.isOpen || true}
      style={{ marginBottom: `${index * 70}px` }}
    >
      <Alert
        onClose={() => removeNotification(index)}
        severity={notification.variant}
        sx={{ width: '100%' }}
      >
        {notification.message}
      </Alert>
    </Snackbar>
  );
}


export default CustomSnackbar;