import { useEffect, useState } from "react";

const useFetch = (url: string | null) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            if (url) {
              const response = await fetch(url);
              const result = await response.json();
              setData(result);
            } else {
              throw new Error("URL is null");
            }
          } catch (error: any) {
            setError(error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, [url]);
    
      return { data, error, loading };
};

export default useFetch;