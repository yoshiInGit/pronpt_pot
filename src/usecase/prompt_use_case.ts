import { useEffect, useState } from "react"

export const usePromptsByMode = ({mode}:{mode : Mode}) =>{
        const [prompts, setPrompts]     = useState<Prompt[]>([]);
        const [isLoading, setIsLoading] = useState<boolean>(true);
        const [error, setError] = useState(null);

        // TODO fetch prompts
        useEffect(()=>{},[])

        return {prompts, isLoading, error};
}

export const usePromptById = ({id} : {id : string}) => {
    const [prompt, setPrompts]     = useState<Prompt>(new Prompt({
        uuid  : "fake",
        title  : "",
        prompt : "",
        ans    : "",
        memo   : "",
        book   : 0,
        aiName : "",
        user   : ""
    }));
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState(null);

    // TODO fetch prompts
    useEffect(()=>{},[]);

    return {prompt, isLoading, error};
}


export const usePostPrompt = ({prompt} : {prompt : Prompt}) => {
  const [response, setResponse]   = useState(null);
  const [error, setError]         = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //TODO post prompt

  return { response, error, isLoading };
}