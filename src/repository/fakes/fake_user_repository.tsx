class FakeUserRepository implements IUserRepository{
    private static instance: FakeUserRepository;

    private constructor() {
        // init
    }

    public static getInstance(): FakeUserRepository {
        if (!FakeUserRepository.instance) {
            FakeUserRepository.instance = new FakeUserRepository();
        }
        return FakeUserRepository.instance;
    }


    getUserById({ id }: { id: string; }): Promise<void> {
        throw new Error("Method not implemented.");
    }

}