import styles from './headerLogo.module.css'
import image from '../../../../public/vite.svg'
import { NavLink } from 'react-router-dom'

export function HeaderLogo() {
  return (
    <NavLink to={'/'} className={styles.link}>
      <img className={styles.logo} src={image} alt="Logo" />

      <span className={styles.nameToolki}>
        toolki
      </span>

      <span className={styles.nameNamix}>
        namix
      </span>
    </NavLink>
  )
}
