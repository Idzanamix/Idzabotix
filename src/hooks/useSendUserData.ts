import { useEffect, useState } from "react";
import axios from 'axios'

interface IuseSendUserData {
  coins: number;
  energy: number;
  id?: string;
}

export function useSendUserData({ id, coins, energy }: IuseSendUserData) {
  const [isLoading, setIsLoading] = useState(true);
  const [isSended, setIsSended] = useState(false);

  const [error, setError] = useState<any>(null);

  const postData = async () => {
    setIsLoading(true);

    try {
      await axios.post(`http://127.0.0.1:8002/test/user_exit/${id}?coins=${coins}&energy=${energy}`)
        .then(() => {
          setIsSended(true);
        });

    } catch (error) {
      console.log(error);
      setIsSended(false);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    postData();
  }, [id]);

  return { isLoading, error, isSended };
}
