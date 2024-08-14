import { Modal, Box, Typography, Stack, Button } from '@mui/material'
import styles from './modalSave.module.css'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

interface IModalSave {
  onClose: () => void;
  onSave: () => void;
  isOpen: boolean;
}

export function ModalSave({ onClose, onSave, isOpen }: IModalSave) {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal__title"
      aria-describedby="modal__description"
    >
      <Box component='div' className={styles.modal}>
        <Typography
          id="modal__title"
          variant="h6"
          component="h2"
        >
          Do you really want to log out?
        </Typography>
        <Typography
          id="modal__description"
          align='center'
          mb={2}
        >
          Your progress will be saved!
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            onMouseUp={onClose}
            onTouchEnd={onClose}
          >
            Cancel
          </Button>

          <Button
            color="primary"
            variant="contained"
            startIcon={<ExitToAppIcon />}
            onMouseUp={onSave}
            onTouchEnd={onSave}
          >
            Save and exit
          </Button>
        </Stack>
      </Box>
    </Modal>
  )
}

export default ModalSave;
