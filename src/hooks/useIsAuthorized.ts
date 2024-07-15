/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setIsAuthorizedState } from "../store/slices/tokenSlice";

export function useIsAuthorized() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    try {
      axios
        .get("/isAuthorized")
        .then(({ data }) => {

          setIsAuthorized(data);

          dispatch(setIsAuthorizedState(data));
        })
        .catch((error) => {
          console.log(error);
          dispatch(setIsAuthorizedState(false));
        });

    } catch (e) {
      console.log(e);
    }
  }, [])

  return isAuthorized
}
