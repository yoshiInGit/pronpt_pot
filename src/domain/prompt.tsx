type promtParams = {
    uuid   : string,
    title  : string,
    prompt : string,
    ans    : string,
    memo   : string,
    book   : number,
    aiName : string,
    user   : string,
}

class Prompt{
    uuid   : string
    title  : string
    prompt : string
    ans    : string
    memo   : string
    book   : number
    aiName : string
    user   : string

    constructor({uuid, title, prompt, ans, memo, book, aiName, user}:promtParams){
        this.uuid   = uuid;
        this.title  = title;
        this.prompt = prompt;
        this.ans    = ans;
        this.memo   = memo;
        this.book   = book;
        this.aiName = aiName;
        this.user   = user;
    }
}