import { useState } from "react";
import { fetchQuery } from "../utils/fetchQuery";

export const useMutation = (query, { variables, onCompleted = () => { }, onError = () => { } }) => {
  if (!query) throw new Error('Query is required')

  const makeRequest = (props = {}) => {
    setLoading(true)
    fetchQuery({ query, variables: variables || props?.variables || undefined })
      .then(({ status, body }) => {
        setLoading(false)
        onCompleted({
          status,
          body,
          error: null
        })
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

  return { request: makeRequest, data: response, loading, previousResponse };
}