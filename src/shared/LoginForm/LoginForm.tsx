import {
  Card,
  CardActionArea,
  Typography,
  Button,
  CardActions,
  Container,
} from '@mui/material';
import styles from './LoginForm.module.css';
import { lazy } from 'react';

const HeaderLogoLazy = lazy(() => import('../HeaderLogo/HeaderLogo'));


function LoginForm() {
  return (
    <Container
      component="section"
      className={styles.login__form}
    >
        <Card className={styles.card}>
          <CardActionArea href='https://t.me/IdzanamixBot'>
            <HeaderLogoLazy />
            <Typography gutterBottom variant="h4" align='center'>
              Start the game, become a hero!
            </Typography>
          </CardActionArea>
          <CardActions>
            <Button
              color="primary"
              variant="contained"
              size="large"
              href='https://t.me/IdzanamixBot'
            >
              Getting started
            </Button>
          </CardActions>
        </Card>
    </Container>
  )
}

export default LoginForm;
