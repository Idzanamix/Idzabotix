import styles from './stargazerCount.module.css'

interface IStargazerCount {
  stargazerCount: number;
}

export function StargazerCount({ stargazerCount }: IStargazerCount) {
  return (
    <span className={styles.star}>⭐ Star {stargazerCount}</span>
  )
}
