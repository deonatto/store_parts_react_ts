import { useEffect, useState } from "react";
import { Part } from "../models/part";

interface HookValues{
    parts: Part[],
    message: string, 
    loading: boolean
}

export default function useParts (query:string, type:string): HookValues {
  const [parts, setParts] = useState<Part[]>([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //set loading value to true to show spinner
    setLoading(true);

    // set value of varibales when an error occurs
    const setErrorValues = () => {
      setMessage("Something went Wrong");
      setLoading(false);
      setParts([]);
    };

    //set Url to be fetched
    const getUrl = () => {
      let queryString = "";
      if (query && type) {
        queryString = `?query=${query}&type=${type}`;
      } else if (!query && type) {
        queryString = `?type=${type}`;
      } else if (!type && query) {
        queryString = `?query=${query}`;
      }
      return `http://localhost:8081/store/parts${queryString}`;
    };

    //get url to be fetched
    const url = getUrl();

    //get all types
    const getParts = async () => {
      try {
        const res = await fetch(url, {
          method: "GET",
        });
        if (res.status >= 200 && res.status < 300) {
          const data = await res.json();
          data.length === 0 && setMessage("No parts found");
          setParts(data);
          setLoading(false);
        } else {
          setErrorValues();
        }
      } catch (err) {
        setErrorValues();
      }
    };
    getParts();
  }, [query, type]);

    return {parts, message, loading};
}