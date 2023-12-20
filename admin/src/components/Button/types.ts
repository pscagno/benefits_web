import type { ButtonProps } from '@mui/material/Button';

interface CustomButtonProps extends ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'contained' | 'outlined' | 'text';
  sx?: object;
}

export default CustomButtonProps