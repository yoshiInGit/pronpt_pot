export class AIDic{

    id2Name : Map<string, string>;

    constructor({id2Name} : {id2Name : Map<string, string>}){
        this.id2Name = id2Name;
    }

    getAINameById({id}:{id : string}) : string{
        let name = this.id2Name.get(id);

        if(name==undefined) name = "";

        return name;
    }
}