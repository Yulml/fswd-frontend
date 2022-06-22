import { useEffect, useState } from "react";

export const useFetch = (toSave) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('localhost:8000', {
      method: "POST",
      body: JSON.stringify(toSave),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [toSave]);
  return { data, error, loading };
};
