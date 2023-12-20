import { useCallback, useState } from 'react';

export default function useModal() {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenModal = useCallback(() => {
    setOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpen(false);
  }, []);

  return {
    open,
    setOpen,
    handleOpenModal,
    handleCloseModal,
  };
}
