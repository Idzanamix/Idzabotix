import { useCustomMatchMedia } from "../../../hooks/useCustomMatchMedia";
import { selectAppoloData, useAppSelector } from "../../../store/storeSelectors";
import { changeLocationAuth } from "../../../utils/changeLocationAuth";
import { changeLocationLogout } from "../../../utils/changeLocationLogout";
import styles from './githubLink.module.css'

export function GithubLink() {
  const { isAuthorized } = useAppSelector(selectAppoloData);
  const { mobile } = useCustomMatchMedia();

  return (
    isAuthorized
      ? <a
        onClick={changeLocationLogout}
        className={styles.link}
      >
        Log&nbsp;out
      </a>

      : <a
        type="button"
        onClick={changeLocationAuth}
        className={styles.link}
      >
        log&nbsp;in {` ${mobile ? '' : 'GitHub'}`}
      </a>
  )
}
