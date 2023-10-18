import { AIDic } from "../domain/ai_dic";
import { FakeAIRepository } from "./ai_repository"

export abstract class IAIRepository{
    abstract getAiDic() : AIDic;
}

export const getAIRepository = () : IAIRepository => {
    return FakeAIRepository.getInstance();
}