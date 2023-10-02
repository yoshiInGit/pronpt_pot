import { useEffect, useState } from "react"
import Mode from "../domain/mode";
import { getPromptRepository } from "../repository/i_prompt_repository";

export const usePromptsByMode = ({mode}:{mode : Mode}) =>{
        const [prompts, setPrompts]     = useState<Prompt[]>([]);
        const [isLoading, setIsLoading] = useState<boolean>(true);
        const [error, setError]         = useState(null);

        useEffect(()=>{
          try{
            (async ()=>{
              const prompts : Prompt[] = await getPromptRepository().getPromptsByMode({mode : mode});
              setPrompts(prompts);
              setIsLoading(false);
            })();

          } catch (e : any){
            setError(e);
            setIsLoading(false);
          }
        },[])

        return {prompts, isLoading, error};
}

export const usePromptById = ({id} : {id : string}) => {
    const [prompt, setPrompt]     = useState<Prompt>(new Prompt({
        uuid  : "fake",
        title  : "",
        prompt : "",
        ans    : "",
        memo   : "",
        book   : 0,
        aiName : "",
        userId : ""
    }));
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
      try{
        (async ()=>{
          const prompt = await getPromptRepository().getPromptById({id:id});
          setPrompt(prompt);
          setIsLoading(false);
        })();
      } catch(e : any){
        setError(e);
        setIsLoading(false);
      }
    },[]);

    return {prompt, isLoading, error};
}


export const usePostPrompt = ({prompt} : {prompt : Prompt}) => {
  const [error, setError]         = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    try{
      (async ()=>{
        await getPromptRepository().addPrompt({prompt : prompt});
        setIsLoading(false);
      })()  
    } catch (e : any){
      setError(e);
      setIsLoading(false);
    }
  },[]);

  return {error, isLoading };
}