import { IRepositoryItem, RepositoryItem } from '../RepositoryItem';
import styles from './RepositoryList.module.css'

interface IRepositoryList {
  props: IRepositoryItem[];
}

export function RepositoryList({ props }: IRepositoryList) {
  return (
    <ul className={styles.list}>
      {props && props.map(item =>
        <RepositoryItem {...item} key={item.id} />)}
    </ul>
  )
}
