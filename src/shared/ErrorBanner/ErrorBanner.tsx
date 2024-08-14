import { Container, Card, CardActionArea, Typography, CardActions, Button } from '@mui/material'
import { HeaderLogo } from '../HeaderLogo'
import styles from './errorBanner.module.css'

function ErrorBanner(massage: { massage?: string }) {
  return (
    <Container
      component="section"
      className={styles.error__banner}
    >
        <Card className={styles.error}>
          <CardActionArea href='/'>
            <HeaderLogo text='Error' />
            <Typography gutterBottom variant="h4" align='center'>
              Something went wrong...
            </Typography>
            {massage && <Typography gutterBottom variant="h4" align='center'>
              {massage.massage}
            </Typography>}
          </CardActionArea>
          <CardActions>
            <Button
              color="primary"
              variant="contained"
              size="large"
              href='/'
            >
              go back to the main page
            </Button>
          </CardActions>
        </Card>
    </Container>
  )
}

export default ErrorBanner;
