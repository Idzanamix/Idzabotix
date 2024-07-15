/* eslint-disable react-hooks/exhaustive-deps */

import { useParams } from 'react-router-dom';
import { useRepositoryDataByIdQuery } from './repositoryPage.generated';
import styles from './RepositoryPage.module.css'
import { Error } from '../../errorBanners/Error';
import { getRelativeTimeString } from '../../../utils/getRelativeTimeString';
import { StargazerCount } from '../StargazerCount';
import { LanguagesList } from './LanguagesList';
import { selectIsToken, useAppSelector } from '../../../store/storeSelectors';

interface IRepositoryPage {
  owner: {
    avatarUrl: string;
    login: string;
    url: string;
  },
  defaultBranchRef: {
    target: {
      history: {
        edges: [
          {
            node: {
              committedDate: string
            }
          }
        ]
      }
    }
  },
  description: string,
  stargazerCount: number,
  languages: {
    edges: [
      {
        node: {
          name: string
        }
      }
    ]
  }
}

export function RepositoryPage() {
  const IsToken = useAppSelector(selectIsToken);
  const { id } = useParams();

  const { data, loading, error } = useRepositoryDataByIdQuery({
    variables: {
      repoId: id || ''
    },
  });

  if (loading) return <div>Loading...</div>
  if (!IsToken) return <Error massage='Log in to get started' />;
  if (!data || error) return <Error massage='ERROR 404: page not found' />;

  const {
    owner: {
      avatarUrl,
      url,
      login
    },
    defaultBranchRef: {
      target: {
        history: {
          edges
        }
      }
    },
    description,
    stargazerCount,
    languages } = data.node as IRepositoryPage;

  return (
    <div className={styles.repository}>
      <div className={styles.head}>
        <a
          className={styles.link}
          href={url}
          target='__blank'
        >
          {login}
        </a>

        {avatarUrl && <img src={avatarUrl} className={styles.image} alt="User awatar" />}

        {edges[0].node.committedDate && <span className={styles.commitAt}>
          last commit {getRelativeTimeString(edges[0].node.committedDate)}
        </span>}
      </div>
      <div className={styles.body}>
        <p className={styles.descr}>
          {description}
        </p>

        <StargazerCount stargazerCount={stargazerCount} />

        <LanguagesList languages={languages} />
      </div>
    </div >
  )
}
