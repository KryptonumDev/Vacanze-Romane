import { useEffect, useState } from "react";
import { fetchQuery } from "../utils/fetchQuery";

export const useQuery = (query, { variables, onComplited = () => { }, onError = () => { } }) => {
  if (!query) throw new Error('Query is required')

  const makeRequst = () => {
    setLoading(true)
    fetchQuery({ query, variables })
      .then(({ status, body }) => {
        setLoading(false)
        onComplited(body, status)
        if (response.body !== null || response.error !== null) setPreviousResponse(response)
        setResponse({
          status,
          body,
          error: null
        });
      })
      .catch(error => {
        onError(error)
        setLoading(false)
        if (response.body !== null || response.error !== null) setPreviousResponse(response)
        setResponse({
          status: 'error',
          body: null,
          error
        });
      });
  }

  const [loading, setLoading] = useState(false);
  const [previousResponse, setPreviousResponse] = useState(null);
  const [response, setResponse] = useState({
    status: 'loading',
    body: null,
    error: null
  });

  useEffect(() => {
    makeRequst();
  }, [query, variables]);

  return { revalidate: makeRequst, data: response, loading, previousResponse };
}