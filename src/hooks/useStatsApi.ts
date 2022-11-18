import { useState, useEffect } from "react";
import axios from "axios";

function useStatsApi<T>(url: string, initialState: T) {
  const [data, setData] = useState<T>(initialState);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!url) return;
    const fetchStats = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const result = await axios(url);
        const resultData = result.data.stats;
        setData(resultData);
      } catch (error) {
        setIsError(true);
        console.log("Error: " + error);
      }
      setIsLoading(false);
    };
    fetchStats();
  }, []);

  return [{ data, isLoading, isError }];
}

export default useStatsApi;
