type AiProps = {
    uuid : string,
    name : string,
    url  : string,
}

class Ai{
    uuid : string
    name : string
    url  : string

    constructor({uuid, name, url} : AiProps){
        this.uuid = uuid 
        this.name = name 
        this.url  = url 
    }
}