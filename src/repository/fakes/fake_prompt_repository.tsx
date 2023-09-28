class FakePromptRepository implements IPromptRepository{
    private static instance: FakePromptRepository;

    private prompts : Prompt[] = [] ;

    private constructor() {
        // init
    }

    public static getInstance(): FakePromptRepository {
        if (!FakePromptRepository.instance) {
            FakePromptRepository.instance = new FakePromptRepository();
        }
        return FakePromptRepository.instance;
    }

    async add({ prompt }: { prompt: Prompt; }): Promise<void> {
        this.prompts.push(prompt);
    }
    
    async remove({ prompt }: { prompt: Prompt; }): Promise<void> {
        this.prompts = this.prompts.filter(item => item.uuid !== prompt.uuid);
    }
    
    async update({ prompt }: { prompt: Prompt; }): Promise<void> {
        this.prompts = this.prompts.filter(item => item.uuid !== prompt.uuid);
        this.prompts.push(prompt);
    }

    async getByMode({ mode }: { mode: Mode; }): Promise<Prompt[]> {
        return this.prompts;
    }
}