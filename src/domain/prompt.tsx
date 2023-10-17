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

    truncateLen = 324

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

    truncatePrompt() {
        if (this.prompt.length <= this.truncateLen) {
          return this.prompt;
        }
        return this.prompt.slice(0, this.truncateLen) + '...';
    }

    truncateAns() {
        if (this.ans.length <= this.truncateLen) {
          return this.ans;
        }
        return this.ans.slice(0, this.truncateLen) + '...';
    }
}


type toPostPromtParams = {
    title  : string,
    prompt : string,
    ans    : string,
    memo   : string,
    aiName : string,
}

export class ToPostPrompt{
    title  : string
    prompt : string
    ans    : string
    memo   : string
    aiName : string

    constructor({title, prompt, ans, memo, aiName} : toPostPromtParams){
        this.title  = title;
        this.prompt = prompt;
        this.ans    = ans;
        this.memo   = memo;
        this.aiName = aiName; 
    }
}