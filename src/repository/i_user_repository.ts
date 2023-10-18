import { MySelf } from "../domain/user";
import { FakeUserRepository } from "./user_repository";

export abstract class IUserRepository{
    abstract getId2Names({ids} : {ids : string[]}) : Map<string, string>;

    abstract getMySelf() : MySelf;
}

export const getUserRepository = () : IUserRepository => {
    return FakeUserRepository.getInstance();
}