import React, { lazy } from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import styles from './saveAndExitModal.module.css'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { setIsOpenModal } from '../../../store/slices/gameSlice/gameSlice';

const ModalSaveLazy = lazy(() => import('./ModalSave/ModalSave'));


function SaveAndExitModal() {
  const dispatch = useDispatch();
  const [isOpen, setOpen] = React.useState(false);

  function handleMouseUp() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  async function handleSaveAndExit() {
    dispatch(setIsOpenModal(true));
    setOpen(false);
  }

  return (
    <React.Fragment>
      <Button
        color="primary"
        variant="contained"
        size="small"
        onMouseUp={handleMouseUp}
        onTouchEnd={handleMouseUp}
        startIcon={<ExitToAppIcon />}
        className={styles.button}
      >
        Save and exit
      </Button>

      {isOpen &&
        <ModalSaveLazy
          isOpen={isOpen}
          onClose={handleClose}
          onSave={handleSaveAndExit} />}
    </React.Fragment>
  );
}

export default SaveAndExitModal;
