import { CardContent, Typography } from "@mui/material";
import styles from './header.module.css'
import { lazy } from "react";

const IconLogoLazy = lazy(() => import("../../icons/IconLogo"));

interface IHeaderLogo {
  text?: string
}

export function HeaderLogo({ text }: IHeaderLogo) {
  return (
    <CardContent className={styles.card}>
      <IconLogoLazy className={styles.logo} />
      <Typography
        variant="h4"
        component="div"
        align='center'
        marginLeft={1}
      >
        Idza
      </Typography>
      <Typography
        variant="h4"
        component="div"
        color='primary'
        className={styles.descr}
      >
        {`${text ? text : 'Bot'} `}
      </Typography>
      <Typography variant="h4" component="div" align='center'>
        ix
      </Typography>
    </CardContent>
  )
}

export default HeaderLogo;
