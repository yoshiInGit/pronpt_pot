import { useEffect, useState } from "react"
import Mode from "../domain/mode";
import { getPromptRepository } from "../repository/i_prompt_repository";
import { Prompt, ToPostPrompt as ToPostPrompt, ToShowPrompt } from "../domain/prompt";
import { getUserRepository } from "../repository/i_user_repository";
import { getAIRepository } from "../repository/i_ai_repository";

export const usePromptsByMode = ({mode}:{mode : Mode}) =>{
        const [toShowPrompts, setToShowPrompts]     = useState<ToShowPrompt[]>([]);
        const [isLoading, setIsLoading]             = useState<boolean>(true);
        const [error, setError]                     = useState(null);

        useEffect(()=>{
          setIsLoading(true);

          try{
            (async ()=>{
              // Get MySelf
              const mySelf = await getUserRepository().getMySelf();

              // Get Prompt
              const prompts : Prompt[] = await getPromptRepository().getPromptsByMode({mode : mode});

              // Get Users
              let userIds = [];
              for(let prompt of prompts){
                userIds.push(prompt.userId);
              }

              const id2Names = await getUserRepository().getId2Names({ids : userIds});              

              // Get AI info
              const aIDic = getAIRepository().getAiDic(); 
              

              // Combine and create ToShowPrompts
              let toShowPrompts : ToShowPrompt[] = []
              for(let prompt of prompts){
                const isBooked = mySelf.bookedPromptIds.includes(prompt.uuid);
                const name = id2Names.get(prompt.userId) ?? "----"

                toShowPrompts.push(
                  new ToShowPrompt({
                    uuid     : prompt.uuid,
                    title    : prompt.title,
                    prompt   : prompt.prompt,
                    ans      : prompt.ans,
                    memo     : prompt.memo,
                    book     : prompt.book,
                    userId   : prompt.userId,
                    userName : name,
                    isBooked : isBooked,
                    aiName   : aIDic.id2Name.get(prompt.aiId) ?? ""
                  })
                )
              }

              setToShowPrompts(toShowPrompts);
              setIsLoading(false);
            })();

          } catch (e : any){
            setError(e);
            setIsLoading(false);
          }
        },[mode])

        return {toShowPrompts, isLoading, error};
}


export const postPrompt = async ({toPostPrompt} : {toPostPrompt : ToPostPrompt}) => {
  await getPromptRepository().addPrompt({toPostPrompt : toPostPrompt});
}