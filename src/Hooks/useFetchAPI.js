import { useState, useEffect } from "react";

const useFetchAPI = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: Status ${response.status}`);
        }
        let data = await response.json();
        let sanitisedData = data.map(
          ({ id, title, price, image, description }) => ({
            id,
            title,
            price,
            image,
            description,
          })
        );
        setData(sanitisedData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useFetchAPI;
