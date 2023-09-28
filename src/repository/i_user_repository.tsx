abstract class IUserRepository{
    abstract getUserById({id}:{id: string}): Promise<void>;
}

const getUserRepository = ():IUserRepository =>{
    throw Error();
}