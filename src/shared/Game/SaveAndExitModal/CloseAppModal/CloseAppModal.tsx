import { Box, Modal, Typography } from '@mui/material'
import styles from './closeAppModal.module.css'
import { Loader } from '../../../Loader';
import { useSendUserData } from '../../../../hooks/useSendUserData';
import { useParams } from 'react-router-dom';
import { useAppSelector, selectUserData } from '../../../../store/slices/gameSlice/gameSelectors';
import { useEffect } from 'react';
import { postEvent } from '@telegram-apps/sdk';
import { useDispatch } from 'react-redux';
import { setIsOpenModal } from '../../../../store/slices/gameSlice/gameSlice';
import { setUserData } from '../../../../store/slices/userSlice/userSlice';


function CloseAppModal() {
  const { userId } = useParams();
  const { currentEnergy, coins } = useAppSelector(selectUserData);
  const dispatch = useDispatch();

  const { isLoading, isSended, error } = useSendUserData({
    id: userId,
    energy: currentEnergy,
    coins
  });

  useEffect(() => {
    error && dispatch(setUserData({ coins, energy: currentEnergy }));

    setTimeout(() => {
      dispatch(setIsOpenModal(false));
      postEvent('web_app_close');
    }, 1000);
  }, [!isLoading])

  return (
    <Modal
      open={true}
      aria-labelledby="modal__title"
      aria-describedby="modal__description"
      className={styles.modal}
    >
      <Box component='div' className={styles.modal__body}>
        <Loader />
        <Typography
          id="modal__title"
          variant="h6"
          component="h2"
          className={styles.descr}
        >
          {isLoading && 'Saving...'}
          {isSended && 'Ready!'}
          {error && 'Error!'}
        </Typography>
      </Box>
    </Modal>
  );
}

export default CloseAppModal;
