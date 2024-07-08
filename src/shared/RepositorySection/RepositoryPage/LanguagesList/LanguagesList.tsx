import styles from './languagesList.module.css'

interface ILanguagesList {
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

export function LanguagesList({ languages: { edges } }: ILanguagesList) {
  return (
    edges.length > 0 &&
    <>
      <h3 className={styles.title}>Languages:</h3>

      <ul className={styles.list}>
        {edges.map(item => (
          <li
            className={styles.item}
            key={item.node.name}
          >
            {item.node.name}
          </li>
        ))}
      </ul>
    </>
  )
}
