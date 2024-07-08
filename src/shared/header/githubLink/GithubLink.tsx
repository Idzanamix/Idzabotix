import { useDispatch } from "react-redux";
import { resetToken } from "../../../store/slices/tokenSlice";
import { selectIsToken, useAppSelector } from "../../../store/storeSelectors";
import { NavLink } from "react-router-dom";

export function GithubLink() {
  const { VITE_SITE_URL, VITE_CLIENT_ID } = import.meta.env;
  const IsToken = useAppSelector(selectIsToken);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(resetToken());
  }

  return (
    IsToken
      ? <NavLink to={'/'} onClick={handleClick}>Log out</NavLink>

      : <a href={`https://github.com/login/oauth/authorize?client_id=${VITE_CLIENT_ID}&response_type=code&redirect_uri=${VITE_SITE_URL}`}>
        log in GitHub
      </a>
  )
}
