import { createContext, useContext, useState } from 'react';

interface Notification {
  isOpen?: boolean;
  message: string;
  variant: 'error' | 'info' | 'success' | 'warning';
  position?: 'center' | 'left' | 'right';
}

interface MultipleNotificationContextType {
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
  removeNotification: (index: number) => void;
  clearAllNotifications: () => void; // Add this function
}

export const MultipleNotificationContext = createContext<MultipleNotificationContextType>({
  notifications: [],
  addNotification: () => { },
  removeNotification: () => { },
  clearAllNotifications: () => { },

});

export const useMultipleNotificationContext = () => useContext(MultipleNotificationContext);

interface MultipleNotificationProviderProps {
  children: React.ReactNode;
}

export function MultipleNotificationProvider({ children }: MultipleNotificationProviderProps) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (notification: Notification) => {
    setNotifications((previousNotifications) => [...previousNotifications, notification]);
  };

  const removeNotification = (index: number) => {
    setNotifications((previousNotifications) => {
      const newNotifications = [...previousNotifications];
      newNotifications.splice(index, 1);
      return newNotifications;
    });
  };

  const clearAllNotifications = () => { // Implementation for the function
    setNotifications([]);
  };

  return (
    <MultipleNotificationContext.Provider value={{ notifications, addNotification, removeNotification, clearAllNotifications }}>
      {children}
    </MultipleNotificationContext.Provider>
  );
}
