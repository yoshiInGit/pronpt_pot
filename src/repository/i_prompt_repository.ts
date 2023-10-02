abstract class IPromptRepository{
    abstract getPromptsByMode({mode} : {mode : Mode}) : Promise<Prompt[]>;

    abstract getPromptById({id} : {id : string}) : Promise<Prompt>;

    abstract addPrompt({prompt} : {prompt : Prompt}) : Promise<void>;
}

const getPromptRepository = () : IPromptRepository => {
    return FakePromptRepository.getInstance();
}