import { CardContent, Typography } from "@mui/material";
import { IconLogo } from "../../icons";

export function HeaderLogo() {
  return (
    <CardContent
      sx={{
        marginBottom: 2,
        display: 'flex',
        alignItems: 'end'
      }}>
      <IconLogo />
      <Typography
        variant="h3"
        component="div"
        align='center'
        marginLeft={1}
      >
        Idza
      </Typography>
      <Typography
        variant="h3"
        component="div"
        align='center'
        color='primary'
        sx={{ transform: 'scale(1.1)' }}
      >
        Bot
      </Typography>
      <Typography variant="h3" component="div" align='center'>
        ix
      </Typography>
    </CardContent>
  )
}
