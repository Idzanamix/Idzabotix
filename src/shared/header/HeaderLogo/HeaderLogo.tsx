import styles from './headerLogo.module.css'
import image from '../../../../src/icons/img/vite.svg'
import { NavLink } from 'react-router-dom'
import { useCustomMatchMedia } from '../../../hooks/useCustomMatchMedia';

export function HeaderLogo() {
  const { mobile } = useCustomMatchMedia();

  return (
    <NavLink to={'/'} className={styles.link}>
      <img className={styles.logo} src={image} alt="Logo" />

      {!mobile &&
        <>
          <span className={styles.nameToolki}>
            toolki
          </span>

          <span className={styles.nameNamix}>
            namix
          </span>
        </>}
    </NavLink>
  )
}
