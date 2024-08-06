import {
  Card,
  CardActionArea,
  Typography,
  Button,
  CardActions
} from '@mui/material';
import { HeaderLogo } from '../HeaderLogo';

function LoginForm() {
  return (
    <Card
      sx={{
        maxWidth: 370,
        borderRadius: 7,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        padding: 2
      }}>
      <CardActionArea href='https://t.me/IdzanamixBot'>
        <HeaderLogo />
        <Typography gutterBottom variant="h4" align='center'>
          {'Start the game, become a hero!'}
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
  )
}

export default LoginForm;
