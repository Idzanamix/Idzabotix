import { useEffect, useState } from "react";

export function useTelegramData() {
  const [data, setData] = useState<WebApp>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const tg = window.Telegram.WebApp;

      setData(tg);
    }
  }, []);

  return [data]
}

