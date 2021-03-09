import { useState, useEffect } from "react";
import axios from "axios";

const useStatsApi = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("");
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
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};

export default useStatsApi;
