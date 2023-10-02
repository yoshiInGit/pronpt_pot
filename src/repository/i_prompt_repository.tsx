import Mode from "../domain/mode";
import { FakePromptRepository } from "./prompt_repository";

export abstract class IPromptRepository{
    abstract getPromptsByMode({mode} : {mode : Mode}) : Promise<Prompt[]>;

    abstract getPromptById({id} : {id : string}) : Promise<Prompt>;

    abstract addPrompt({prompt} : {prompt : Prompt}) : Promise<void>;
}

export const getPromptRepository = () : IPromptRepository => {
    return FakePromptRepository.getInstance();
}