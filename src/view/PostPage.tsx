import styled from "styled-components";
import Header from "./components/basic/Header";
import SpaceBox from "./components/layout/SpaceBox";
import Back from "./components/basic/Back";
import Column from "./components/layout/Column";
import { useState } from "react";
import Card from "./components/basic/Card";
import { ToPostPrompt } from "../domain/prompt";
import { postPrompt } from "../usecase/prompt_use_case";
import AlertDialog from "./components/common/AlertDialog";
import Typo from "./components/basic/Typo";
import Icon from "./components/basic/Icon";
import Chat from "./post_page/Chat";
import AISelectDialog from "./post_page/AISelectDialog";

// Styled components -------------------
const PostTitle = styled.div`
    font-family  : 'Kosugi Maru', sans-serif;
    font-size: 22px;
    font-weight: 500;
    color: #333333;
`

const SecTitle = styled.div`
    font-family  : 'Kosugi Maru', sans-serif;
    font-size: 18px;

    @media (min-width: 768px) {
    }

    @media (min-width: 1024px) {
        font-size: 16px;
    }

`

const SecSub = styled.div`
    font-family  : 'Kosugi Maru', sans-serif;
    font-size: 12px;
    color: #7f7f7f;

    @media (min-width: 768px) {
    }

    @media (min-width: 1024px) {
        font-size: 10px;
    }
`

const TitleInput = styled.input`
    font-family  : 'Kosugi Maru', sans-serif;
    border: 1px solid #969696;
    background-color: transparent;
    appearance: none;
    font-size: 16px;
    padding: 2px;
    line-height: 30px;
    border-radius: 4px;
`

const TextField = styled.textarea`
    font-family  : 'Kosugi Maru', sans-serif;
    resize: none;
    border-radius: 4px;
    appearance: none;
    border: 1px solid #969696;
    font-size: 12px;
    padding: 8px;
`

const SelectBox = styled.div`
    width: 30%;
    border: 1px solid black;
    border-radius: 3px;
    display: flex;
    cursor: pointer;
`
const SelectBoxValue = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: start;
    align-items: center;
`


const Selector = ({value, onClick} : {value : string, onClick : ()=>void}) => {
    
    return(
        <>
            <SelectBox onClick={onClick}>
                <SpaceBox width={8}/>
                <SelectBoxValue>{value}</SelectBoxValue>
                <Icon name="expand_more"/>
            </SelectBox>
        </>
    )
}

const CardSize = styled.div`
    width: 100%;

    @media (min-width: 768px) {
        width: 600px;
    }

    @media (min-width: 1024px) {
        width: 680px;
    }
`

// ------------------- Styled components 


const PostBtn = styled.div`
    width            : 100%;
    height           : 48px;
    background-color : #FF008A;
    color            : white;
    border-radius    : 3px;
    display          : flex;
    align-items      : center;
    justify-content  : center;
    filter           : drop-shadow(0px 5px 2px rgba(0, 0, 0, 0.41));
    font-family      : 'Kosugi Maru', sans-serif;
    font-size        : 20px;
    cursor           : pointer;
`

const PostPage = () => {
    

    const [title , setTitle]   = useState<string>("");
    const [AIType, setAIType]  = useState<string>("");
    const [conversation , setConversation] = useState<string[]>([]);
    const [memo , setMemo]     = useState<string>("");

    const [titleAlert, setTitleAlert]   = useState(false);
    const [aiAlert, setAiAlert]         = useState(false);
    const [chatAlert, setChatALert]     = useState(false);

    const [blockSend, setBlockSend] = useState(false);

    const [sendedModalTitle, setSendedModalTItle] = useState("");
    const [sendedModalMsg, setSendedModalMsg]     = useState("");
    const [showSendedModal, setShowSendModal]     = useState(false);
    const closeSendedModal = () => {
        setShowSendModal(false);
        window.location.href = "/";
    }

    const [showEmptyAlertDialog, setShowEmptyAlertDialog] = useState(false);

    const [showAISelectDialog, setShowAISelectDialog] = useState(false);


    const _valid = () => {
        let isOk = true;

        if(title == ""){
            isOk = false;
            setTitleAlert(true);
        }

        if(AIType == ""){
            isOk = false;
            setAiAlert(true);
        }

        if(conversation.includes("")){
            isOk = false;
            setChatALert(true)
        }

        if(isOk==false){
            setShowEmptyAlertDialog(true);
        }

        return isOk
    }

    const onSubmit = async () => {
        if(blockSend==true) return;
        if(_valid()==false) return;

        setBlockSend(true);

        const toPostPrompt = new ToPostPrompt({
            title        : title,
            conversation : conversation,
            memo         : memo,
            aiName       : AIType,
        })

        try {
            await postPrompt({toPostPrompt : toPostPrompt});

            setSendedModalTItle("新しいプロンプトを投稿しました！")
            setSendedModalMsg("プロンプトを投稿しました！\n投稿したプロンプトはマイページから確認できます。");
            setShowSendModal(true);

        } catch (error) {
            setSendedModalTItle("エラーが発生しました。")
            setSendedModalMsg("エラー："+error);
            setShowSendModal(true);
        
        }finally{
            setBlockSend(false);
        }

    }

    
    return(
        <Back>
            <AlertDialog
                title={sendedModalTitle}
                message={sendedModalMsg}
                show={showSendedModal}
                onOK={closeSendedModal}
                />
            
            <AlertDialog
                title="未入力の項目があります!"
                message="メモ以外の項目は必ず埋めてください！"
                show={showEmptyAlertDialog}
                onOK={()=>{setShowEmptyAlertDialog(false)}}
            />

            <AISelectDialog
                show={showAISelectDialog}
                onSelect={(value: string)=>{
                    setAIType(value);
                    setShowAISelectDialog(false);
                }}/>

            <Header home/>

            <Column 
                padding={16}
                gap={16}
                center>

                <SpaceBox height={56}/>

                <CardSize>
                    <Card>
                        <Column padding={8}>
                            <SpaceBox height={16}/>
                                <PostTitle>新しいプロンプトを投稿する</PostTitle>

                                <SpaceBox height={40}/>

                                <SecTitle>タイトル</SecTitle>
                                <SpaceBox height={4}/>
                                <SecSub>プロンプトの内容を一言で</SecSub>
                                <SpaceBox height={8}/>
                                <TitleInput 
                                    onChange={(event)=>{setTitle(event.target.value)}}/>
                                <SpaceBox height={4}/>
                                {titleAlert && <Typo size={10} color="red">**この項目は必ず入力して下さい</Typo>}

                                <SpaceBox height={24}/>

                                <SecTitle>モデル</SecTitle>
                                <SpaceBox height={4}/>
                                <SecSub>どのAIを使った？</SecSub>
                                <SpaceBox height={8}/>

                                <Selector 
                                    value={AIType!="" ? AIType : "----"}  
                                    onClick={()=>{
                                        setShowAISelectDialog(true);
                                    }}
                                />

                                <SpaceBox height={4}/>
                                {aiAlert && <Typo size={10} color="red">**この項目は必ず入力して下さい</Typo>}

                                <SpaceBox height={52}/>


                                <SecTitle>会話</SecTitle>
                                <SpaceBox height={4}/>
                                <SecSub>AIとの会話を書こう</SecSub>
                                <SpaceBox height={4}/>
                                {chatAlert && <Typo size={10} color="red">**この項目は必ず入力して下さい</Typo>}

                                
                                <SpaceBox height={20}/>

                                <Chat 
                                    setConversation={(conversation : string[])=>{
                                        setConversation([...conversation]);
                                    }}/>


                                <SpaceBox height={52}/>

                                <SecTitle>メモ(任意)</SecTitle>
                                <SpaceBox height={4}/>
                                <SecSub>補足しておきたいこと</SecSub>
                                <SpaceBox height={8}/>
                                <TextField 
                                    rows={8}
                                    onChange={(event)=>{setMemo(event.target.value)}}/>
                            <SpaceBox height={16}/>
                        </Column>
                    </Card>
                </CardSize>
                <CardSize>
                    <PostBtn onClick={onSubmit}>投稿する</PostBtn>
                </CardSize>
                <SpaceBox height={32}/>
            </Column>
        </Back>
    );
}

export default PostPage;