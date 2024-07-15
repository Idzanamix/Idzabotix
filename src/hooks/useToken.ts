/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { resetToken, setTokenSlise } from "../store/slices/tokenSlice";
import { useDispatch } from "react-redux";

export function useToken() {
  const [token, setToken] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      axios
        .get("/login")
        .then(({ data }) => {

          setToken(data);

          dispatch(setTokenSlise(true));
        })
        .catch((error) => {
          console.log(error);
          dispatch(resetToken());
        });

    } catch (e) {
      console.log(e);
    }
  }, [])

  return token
}
