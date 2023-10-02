class FakeUserRepository implements IUserRepository{

    
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

    getSimpleUser({ id }: { id: string; }): Promise<SimpleUser> {
        throw new Error("Method not implemented.");
    }
    getUser({ id }: { id: string; }): Promise<User> {
        throw new Error("Method not implemented.");
    }
}