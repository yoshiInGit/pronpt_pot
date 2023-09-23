abstract class IPromptRepository{
    abstract add({prompt}:{prompt : Prompt}) : void;

    abstract remove({prompt}:{prompt : Prompt}) : void;

    abstract update({prompt}:{prompt : Prompt}) : void;
}


const getPromptRepository = () : IPromptRepository =>{
    throw new Error(); 
}