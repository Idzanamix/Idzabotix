import { useEffect, useState } from "react";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { setUserData } from "../store/slices/gameSlice/gameSlice";
import { useAppSelector } from "../store/slices/gameSlice/gameSelectors";
import { selectUser } from "../store/slices/userSlice/userSelectors";


export function useUserData(id: string) {
  const { coins, energy } = useAppSelector(selectUser);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const dispatch = useDispatch();

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const { data } = await axios.get(`http://127.0.0.1:8002/test/user_entry_check/${id}`);

      if (data) {
        dispatch(setUserData(data))
        dispatch(setUserData({ coins: data.coins, energy: data.energy }));
      }
    } catch (error) {
      console.log(error);
      dispatch(setUserData({ coins, energy }));
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  return { isLoading, error };
}
