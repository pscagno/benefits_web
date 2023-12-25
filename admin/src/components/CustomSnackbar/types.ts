export interface Notification {
  position?: 'center' | 'left' | 'right';
  isOpen?: boolean;
  variant: 'error' | 'info' | 'success' | 'warning';
  message: string;
}

export interface CustomSnackbarProps {
  index: number;
  notification: Notification;
  removeNotification: (index: number) => void;
}
