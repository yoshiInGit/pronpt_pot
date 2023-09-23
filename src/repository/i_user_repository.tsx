abstract class IUserRepository{
    abstract create({user}:{user:User}) : void;

    abstract update({user}:{user:User}) : void;

    abstract delete({user}:{user:User}) : void;
}

const getUserRepository = ():IUserRepository =>{
    throw Error();
}