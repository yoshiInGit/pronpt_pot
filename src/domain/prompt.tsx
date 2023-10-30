type promptParams = {
    uuid         : string,
    title        : string,
    conversation : string[]
    memo         : string,
    book         : number,
    aiId         : string,
    userId       : string,
}

export class Prompt{
    uuid         : string
    title        : string
    conversation : string[]
    memo         : string
    book         : number
    aiId         : string
    userId       : string

    truncateLen = 324

    constructor({uuid, title, conversation, memo, book, aiId, userId }:promptParams){
        this.uuid         = uuid;
        this.title        = title;
        this.conversation = conversation;
        this.memo         = memo;
        this.book         = book;
        this.aiId         = aiId;
        this.userId       = userId;
    }
}


type toPostPromtParams = {
    title        : string,
    conversation : string[]
    memo         : string,
    aiName       : string,
}

export class ToPostPrompt{
    title        : string
    conversation : string[]
    memo         : string
    aiName       : string

    constructor({title, conversation, memo, aiName} : toPostPromtParams){
        this.title        = title;
        this.conversation = conversation
        this.memo         = memo;
        this.aiName       = aiName; 
    }
}

type toShowPromptParam = {
    uuid         : string,
    title        : string,
    conversation : string[]
    memo         : string,
    book         : number,
    aiName       : string,
    userId       : string,
    userName     : string,
    isBooked     : boolean,
}

export class ToShowPrompt{

    uuid          : string
    title         : string
    conversation  : string[]
    memo          : string
    book          : number
    aiName        : string
    userId        : string
    userName      : string
    isBooked      : boolean

    truncateLen = 324

    constructor({uuid, title, conversation, memo, book, aiName, userId, userName, isBooked } : toShowPromptParam){
        this.uuid         = uuid
        this.title        = title
        this.conversation = conversation
        this.memo         = memo
        this.book         = book
        this.aiName       = aiName
        this.userId       = userId
        this.userName     = userName
        this.isBooked     = isBooked
    }

    truncatePrompt() {
        const prompt = this.conversation[0];

        if (prompt.length <= this.truncateLen) {
          return prompt;
        }
        return prompt.slice(0, this.truncateLen) + '...';
    }

    truncateAns() {
        const ans = this.conversation[1];

        if (ans.length <= this.truncateLen) {
          return ans;
        }
        return ans.slice(0, this.truncateLen) + '...';
    }
}