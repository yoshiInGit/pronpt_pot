type promptParams = {
    uuid   : string,
    title  : string,
    prompt : string,
    ans    : string,
    memo   : string,
    book   : number,
    aiId   : string,
    userId : string,
}

export class Prompt{
    uuid   : string
    title  : string
    prompt : string
    ans    : string
    memo   : string
    book   : number
    aiId   : string
    userId : string

    truncateLen = 324

    constructor({uuid, title, prompt, ans, memo, book, aiId, userId }:promptParams){
        this.uuid   = uuid;
        this.title  = title;
        this.prompt = prompt;
        this.ans    = ans;
        this.memo   = memo;
        this.book   = book;
        this.aiId   = aiId;
        this.userId = userId;
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

type toShowPromptParam = {
    uuid     : string,
    title    : string,
    prompt   : string,
    ans      : string,
    memo     : string,
    book     : number,
    aiName   : string,
    userId   : string,
    userName : string,
    isBooked : boolean,
}

export class ToShowPrompt{

    uuid     : string
    title    : string
    prompt   : string
    ans      : string
    memo     : string
    book     : number
    aiName   : string
    userId   : string
    userName : string
    isBooked : boolean

    truncateLen = 324

    constructor({uuid, title, prompt, ans, memo, book, aiName, userId, userName, isBooked } : toShowPromptParam){
        this.uuid     = uuid
        this.title    = title
        this.prompt   = prompt
        this.ans      = ans
        this.memo     = memo
        this.book     = book
        this.aiName   = aiName
        this.userId   = userId
        this.userName = userName
        this.isBooked = isBooked
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