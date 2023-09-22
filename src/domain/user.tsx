type userParams = {
    uuid        : string,
    name        : string,
    inf         : string,
    myPrompts   : string[],
    bookPrompts : string[],
}

class User{
    uuid        : string
    name        : string
    inf         : string
    myPrompts   : string[]
    bookPrompts : string[]
    
    constructor({uuid, name,inf, myPrompts, bookPrompts}: userParams){
        this.uuid        = uuid;
        this.name        = name;
        this.inf         = inf;
        this.myPrompts   = myPrompts;
        this.bookPrompts = bookPrompts;
    }
}