import { useCallback, useEffect, useState } from "react";
import debounce from "lodash/debounce";

const useFetch = (
  query: string,
  dataPromise: any,
  debounceWait: number,
  autocomplete: boolean,
  maxItems: number
) => {
  const [data, setData]: any = useState(null);
  const [error, setError]: any = useState(null);

  const fetchData = useCallback(
    debounce(async (query: string, signal: any) => {
      try {
        console.log(query, "[query]");
        const response = await dataPromise(query, signal);
        const result = await response.json();
        console.log(result, "[result]");
        setData(result.slice(0, maxItems));
      } catch (e) {
        console.log(e, "[ERROR]");
        if (!signal.aborted) {
          setError(e);
        }
      }
    }, debounceWait),
    []
  );

  useEffect(() => {
    console.log(query, "[query]");
    console.log(autocomplete, "[auto complete]");
    if (!query || !autocomplete) {
      setData(null);
      setError(null);
      return;
    }
    const controller = new AbortController();
    const signal = controller.signal;

    fetchData(query, signal);

    return () => {
      controller.abort();
    };
  }, [query, fetchData]);

  return { data, error };
};

export { useFetch };
