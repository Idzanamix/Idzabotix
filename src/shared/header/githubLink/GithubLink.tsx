import { useDispatch } from "react-redux";
import { resetToken } from "../../../store/slices/tokenSlice";
import { selectIsToken, useAppSelector } from "../../../store/storeSelectors";
import { NavLink } from "react-router-dom";

export function GithubLink() {
  const IsToken = useAppSelector(selectIsToken);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(resetToken());
  }

  return (
    IsToken
      ? <NavLink to={'/'} onClick={handleClick}>
        Log out
      </NavLink>

      : <a
        type="button"
        onClick={() => window.location.href = '/auth'}
      >
        log in GitHub
      </a>
  )
}
