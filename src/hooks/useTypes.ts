import { useEffect, useState } from "react";

export default function useTypes(): (string[] | null)[] {
  const [types, setTypes] = useState<string[] |null>(null);

  useEffect(() => {
    //get all types
    const getTypes = async () => {
      try {
        const res = await fetch("http://localhost:8081/store/part-types", {
          method: "GET",
        });
        if (res.ok) {
          const data: string[] = await res.json();
          setTypes(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getTypes();
  }, []);

  return [types];
}
