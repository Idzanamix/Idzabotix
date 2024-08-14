import { ReactNode } from 'react';
import styles from './main.module.css'
import { NoSsr } from '@mui/material';

interface IMain {
  children: ReactNode;
}

export function Main({ children }: IMain) {
  return (
    <main className={styles.main}>
      <NoSsr>
        {children}
      </NoSsr>
    </main>
  )
}
