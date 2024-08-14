import { Box, CircularProgress, Typography } from '@mui/material'
import styles from './loader.module.css'
import { IconLogo } from '../../icons'

export function Loader() {
  return (
    <Box component='div' className={styles.loader}>
      <Box component='div' className={styles.loader__box}>
        <IconLogo className={styles.logo} />
        <CircularProgress
          style={{ width: 78, height: 78 }}
          sx={{ opacity: .5 }}
          color='primary'
        />
        <CircularProgress
          style={{ width: 72, height: 72 }}
          sx={{ position: 'absolute', opacity: .7 }}
          color='primary'
        />
        <CircularProgress
          style={{ width: 65, height: 65 }}
          sx={{ position: 'absolute', opacity: .9 }}
          color='primary'
        />
      </Box>

      <Box component='div' className={styles.title}>
        <Typography
          className={styles.descr}
        >
          Idza
        </Typography>
        <Typography
          color='primary'
          className={styles.descr}
          sx={{scale: 1.1, mt: .1}}
        >
          Load
        </Typography>
        <Typography
          className={styles.descr}
        >
          ix..
        </Typography>
      </Box>
    </Box>
  )
}
