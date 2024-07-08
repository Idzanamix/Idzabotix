import { GithubLink } from './githubLink/GithubLink'
import styles from './header.module.css'
import { HeaderLogo } from './HeaderLogo'
import { Search } from './Search'

export function Header() {
  return (
    <header className={styles.header}>
      <HeaderLogo />
      <Search />
      <GithubLink />
    </header>
  )
}
