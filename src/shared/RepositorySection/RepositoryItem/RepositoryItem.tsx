import { NavLink } from 'react-router-dom';
import { getRelativeTimeString } from '../../../utils/getRelativeTimeString';
import styles from './repositoryItem.module.css'
import { StargazerCount } from '../StargazerCount';

export interface IRepositoryItem {
  name: string;
  stargazerCount: number;
  updatedAt: string;
  url: string;
  id: string;
  __typename?: string;
}

export function RepositoryItem({ name, stargazerCount, updatedAt, url, id }: IRepositoryItem) {
  return (
    <li className={styles.item}>
      <article className={styles.article}>
        <NavLink to={`/repository/${id}`} className={styles.linkHide} />
        <div className={styles.wrapper}>
          <NavLink to={`/repository/${id}`} className={styles.link}>
            {name}
          </NavLink>

          <span className={styles.update}>
            last update {getRelativeTimeString(updatedAt)}
          </span>
        </div>

        <StargazerCount stargazerCount={stargazerCount} />

        <a href={url} className={styles.gitHub} target='__blank'>GitHub ➜</a>
      </article>
    </li>
  )
}
