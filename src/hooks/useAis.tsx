import { useEffect, useState } from "react";
import { Ai } from "../domain/ai";
import Config from "../config";

export const useAis = () => {
    const [AIs, setAis]             = useState<Ai[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError]         = useState<any>(null);

    if(Config.MODE == "LOCAL"){
        setIsLoading(false);
        setAis(fakeAis);
    }

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("");
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setAis(result);
          setIsLoading(false);
        } catch (error) {
          setError(error);
          setIsLoading(false);
        }
      };

      fetchData();
    }, [""]);

    return { AIs, isLoading, error };
}

const fakeAis = [
    new Ai({
        uuid : "ai1",
        name : "ChatGPT",
        url  : "https://chat.openai.com/"
    }),
    new Ai({
        uuid : "ai2",
        name : "BARD",
        url  : "https://bard.google.com/chat"
    }),
]