import { ReactNode } from 'react';
import styles from './main.module.css'

interface IMain {
  children: ReactNode;
}

export function Main({ children }: IMain) {
  return (
    <main className={styles.main}>
      {children}
    </main>
  )
}
