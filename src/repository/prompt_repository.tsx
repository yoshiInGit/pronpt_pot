import Mode from "../domain/mode";
import { Prompt, ToPostPrompt } from "../domain/prompt";
import { IPromptRepository } from "./i_prompt_repository";
import { v4 as uuidv4 } from 'uuid';

export class FakePromptRepository implements IPromptRepository{
    
    prompts : Prompt[] = [
      new Prompt({
        uuid : "prompt1",
        title : "卵焼の作り方",
        prompt : "おいしい卵焼きを作るためのコツを教えて",
        ans : `
        おいしい卵焼きを作るコツは、次の3つです。
        
        卵液をよく混ぜる
        卵液をよく混ぜることで、卵白と卵黄が均一になり、きめ細かい卵焼きになります。また、空気を含ませることで、ふわふわに仕上がります。卵液を混ぜるときは、菜箸の先をボウルの底につけたまま、卵白を切るように動かしましょう。
        
        卵焼き器をよく温める
        卵焼き器をよく温めることで、卵液が早く固まり、きれいに焼き上がります。卵焼き器を温めるときは、中火程度の温度で、1分程度を目安にしましょう。
        
        卵液を3回に分けて流し入れる
        卵液を3回に分けて流し入れることで、卵焼きが均一に焼き上がります。また、卵焼きを巻きやすくなるというメリットもあります。
        
        具体的な手順は、次のとおりです。
        
        卵をボウルに割り入れ、砂糖、塩、だし汁を加えてよく混ぜる。
        卵液を3回に分けてこすり、きめ細かくする。
        卵焼き器を中火程度でよく温め、サラダ油を薄くひく。
        卵液の1/3量を流し入れ、全体に広げる。
        半熟になったら、奥から手前に巻く。
        巻いた卵焼きを卵焼き器に戻し、残りの卵液を流し入れ、同様に巻く。
        巻き終わりを内側に折り込んで、完成。
        また、巻き方を工夫することで、見た目にもおいしい卵焼きになります。例えば、卵焼き器を傾けて、卵液を薄く広げるようにすると、きれいな巻き目になります。また、卵焼きを巻くときに、まきすの下に箸を2本かませて空気の通りを作ると、卵焼きの下面が蒸れにくくなります。
        
        ぜひ、これらのコツを参考に、おいしい卵焼きを作ってみてください。`,
        memo : "Example memo",
        book : 0,
        aiId : "BARD",
        userId : "user1",
      }),
      new Prompt({
        uuid : "prompt2",
        title : "title",
        prompt : "",
        ans : "",
        memo : "",
        book : 0,
        aiId : "BARD",
        userId : "user1",
      }),new Prompt({
        uuid : "prompt3",
        title : "title",
        prompt : "",
        ans : "",
        memo : "",
        book : 0,
        aiId : "BARD",
        userId : "user1",
      })
    ];
    
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

    async addPrompt({ toPostPrompt }: { toPostPrompt: ToPostPrompt; }): Promise<void> {
      const prompt = new Prompt({
        uuid   : uuidv4(),
        title  : toPostPrompt.title,
        prompt : toPostPrompt.prompt,
        ans    : toPostPrompt.ans,
        memo   : toPostPrompt.memo,
        book   : 0,
        aiId   : toPostPrompt.aiName,
        userId : "user"
      })

      console.log(this.prompts);

      this.prompts.push(prompt);
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

}