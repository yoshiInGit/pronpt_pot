import { MySelf } from "../domain/user";
import { IUserRepository } from "./i_user_repository";

export class FakeUserRepository implements IUserRepository{
    
    private static instance: FakeUserRepository | null = null;

    private constructor() {
      // コンストラクタをprivateにすることで外部からのインスタンス化を防ぐ
    }
  
    static getInstance(): FakeUserRepository {
      // インスタンスが存在しない場合は新しく作成し、存在する場合は既存のインスタンスを返す
      if (!this.instance) {
        this.instance = new FakeUserRepository();
      }
      return this.instance;
    }

    getId2Names({ ids }: { ids: string[]; }): Map<string, string> {
      return new Map<string, string>().set("user1", "user1");
    }

    getMySelf(): MySelf {
      return new MySelf({
        bookedPromptIds : ["prompt1"]
      })
    }
  

}