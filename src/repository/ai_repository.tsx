import { AIDic } from "../domain/ai_dic";
import { IAIRepository } from "./i_ai_repository";

export class FakeAIRepository implements IAIRepository{
    
    private static instance: FakeAIRepository | null = null;

    private constructor() {
      // コンストラクタをprivateにすることで外部からのインスタンス化を防ぐ
    }
  
    static getInstance(): FakeAIRepository {
      // インスタンスが存在しない場合は新しく作成し、存在する場合は既存のインスタンスを返す
      if (!this.instance) {
        this.instance = new FakeAIRepository();
      }
      return this.instance;
    }

    getAiDic(): AIDic {
        const id2Name = new Map<string, string>();
        id2Name.set("BARD", "BARD");
        id2Name.set("ChatGPT", "ChatGPT");

        return new AIDic({id2Name : id2Name});
    }
    
}