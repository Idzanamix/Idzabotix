import styles from './header.module.css'
import { HeaderLogo } from './HeaderLogo'

export function Header() {
  return (
    <header className={styles.header}>
      <HeaderLogo />
    </header>
  )
}
