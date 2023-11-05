type promptProps = {
    uuid     : string,
    title    : string,
    aiName   : string,
    chat     : string[],
    memo     : string,
    book     : number,
    userUuid : string,
    userName : string,
    isBooked : boolean,
}

export class Prompt {
    uuid     : string
    title    : string
    aiName   : string
    chat     : string[]
    memo     : string
    book     : number
    userUuid : string
    userName : string
    isBooked : boolean

    _introLength = 235

    constructor({uuid, title, aiName, chat, memo, userUuid, userName, book, isBooked} : promptProps){
        this.uuid     = uuid
        this.title    = title
        this.aiName   = aiName
        this.chat     = chat
        this.memo     = memo
        this.book     = book
        this.userUuid = userUuid
        this.userName = userName
        this.isBooked = isBooked
    }

    _cutString(text: string, length : number): string {
        if (text.length > length) {
            return text.slice(0, length) + '...';
        } else {
            return text;
        }
    }

    introPrompt() : string{
        return this._cutString(this.chat[0], this._introLength);
    }

    introAnswer() : string{
        return this._cutString(this.chat[1], this._introLength);
    }
}

type promptMaterial = {
    title : string,
    aiId  : string,
    chat  : string[],
    memo  : string,
}

export class PromptMaterial{
    title : string
    aiId  : string
    chat  : string[]
    memo  : string

    constructor({title, aiId, chat, memo} : promptMaterial){
        this.title = title
        this.aiId  = aiId
        this.chat  = chat 
        this.memo  = memo 
    }
}