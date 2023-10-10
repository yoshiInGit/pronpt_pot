import Mode from "../domain/mode";
import { Prompt, ToPostPrompt } from "../domain/prompt";
import { FakePromptRepository } from "./prompt_repository";

export abstract class IPromptRepository{
    abstract getPromptsByMode({mode} : {mode : Mode}) : Promise<Prompt[]>;

    abstract getPromptById({id} : {id : string}) : Promise<Prompt>;

    abstract addPrompt({toPostPrompt} : {toPostPrompt : ToPostPrompt}) : Promise<void>;
}

export const getPromptRepository = () : IPromptRepository => {
    return FakePromptRepository.getInstance();
}