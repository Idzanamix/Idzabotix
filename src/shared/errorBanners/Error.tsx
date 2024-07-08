import styles from './error.module.css';

export function Error(massage: { massage: string }) {
  console.log(massage);

  return (
    <div role="alert" className={styles.error}>
      <span className={styles.descr}>
        Something went wrong...
      </span>
      <span className={styles.message}>
        {massage.massage}
      </span>
    </div>
  )
}
