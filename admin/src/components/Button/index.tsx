import Button from '@mui/material/Button';
 
import type CustomButtonProps from './types';

function CustomButton({ text, onClick, variant = 'contained', sx, ...props }: CustomButtonProps) {
  return (
    <Button
      onClick={onClick}
      sx={{
        margin: 6,
        backgroundColor: '#003057',
        ...sx
      }}
      variant={variant}
      {...props}
    >
      {text}
    </Button>
  );
}

export default CustomButton;
