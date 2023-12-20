import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

import type DeleteConfirmationModalProps from './types';

function DeleteConfirmationModal({ open, onClose, onConfirm }: DeleteConfirmationModalProps) {
  return (
    <Dialog
      aria-describedby="alert-dialog-description"
      aria-labelledby="alert-dialog-title"
      onClose={onClose}
      open={open}
    >
      <DialogTitle id="alert-dialog-title">Confirmación</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Esta seguro que desea eliminar este registro?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={onClose}>
          Cancelar
        </Button>
        <Button color="primary" onClick={onConfirm} autoFocus>
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteConfirmationModal;