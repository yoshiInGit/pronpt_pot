abstract class IUserRepository{
    abstract getSimpleUser({id} : {id : string}) : Promise<SimpleUser>;

    abstract getUser({id} : {id : string}) : Promise<User>;
}