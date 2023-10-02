import Mode from "../domain/mode";
import { IPromptRepository } from "./i_prompt_repository";

export class FakePromptRepository implements IPromptRepository{
    
    prompts : Prompt[] = [];
    
    private static instance: FakePromptRepository | null = null;

    private constructor() {
      // コンストラクタをprivateにすることで外部からのインスタンス化を防ぐ
    }
  
    static getInstance(): FakePromptRepository {
      // インスタンスが存在しない場合は新しく作成し、存在する場合は既存のインスタンスを返す
      if (!this.instance) {
        this.instance = new FakePromptRepository();
      }
      return this.instance;
    }

    async getPromptsByMode({ mode }: { mode: Mode; }): Promise<Prompt[]> {
        return this.prompts;
    }

    async getPromptById({ id }: { id: string; }): Promise<Prompt> {
        for(let prompt of this.prompts){
            if(prompt.uuid == id){
                return prompt;
            }
        }

        return this.prompts[0];
    }

    async addPrompt({ prompt }: { prompt: Prompt; }): Promise<void> {
        this.prompts.push(prompt);
    }

}