abstract class IPromptRepository{
    abstract add({prompt}:{prompt : Prompt}) : Promise<void>;

    abstract remove({prompt}:{prompt : Prompt}) : Promise<void>;

    abstract update({prompt}:{prompt : Prompt}) : Promise<void>;

    abstract getByMode({mode}:{mode : Mode}) : Promise<Prompt[]>;
}


const getPromptRepository = () : IPromptRepository =>{
    throw new Error(); 
}