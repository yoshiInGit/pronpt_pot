type promtParams = {
    uuid   : string,
    title  : string,
    prompt : string,
    ans    : string,
    memo   : string,
    book   : number,
}

class Prompt{
    uuid   : string
    title  : string
    prompt : string
    ans    : string
    memo   : string
    book   : number

    constructor({uuid, title, prompt, ans, memo, book}:promtParams){
        this.uuid   = uuid;
        this.title  = title;
        this.prompt = prompt;
        this.ans    = ans;
        this.memo   = memo;
        this.book   = book;
    }
}