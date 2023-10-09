type promtParams = {
    uuid   : string,
    title  : string,
    prompt : string,
    ans    : string,
    memo   : string,
    book   : number,
    aiName : string,
    userId : string,
}

export class Prompt{
    uuid   : string
    title  : string
    prompt : string
    ans    : string
    memo   : string
    book   : number
    aiName : string
    userId : string

    constructor({uuid, title, prompt, ans, memo, book, aiName, userId }:promtParams){
        this.uuid   = uuid;
        this.title  = title;
        this.prompt = prompt;
        this.ans    = ans;
        this.memo   = memo;
        this.book   = book;
        this.aiName = aiName;
        this.userId = userId;
    }
}