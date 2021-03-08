import React, { useState, useEffect } from "react";
import axios from "axios";

const useStatsApi = (fetchUrl) => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(fetchUrl);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      console.log("fetch");
      setIsLoading(true);
      setIsError(false);
      try {
        const result = await axios(url);
        const resultData = result.data.stats;
        setData(resultData);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        console.log("Error: " + error);
      }
    };
    fetchStats();
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};

export default useStatsApi;
