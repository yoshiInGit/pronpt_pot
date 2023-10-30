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

`

const SecSub = styled.div`
    font-family  : 'Kosugi Maru', sans-serif;
    font-size: 14px;
    color: #7f7f7f;
`

const Input = styled.input`
    font-family  : 'Kosugi Maru', sans-serif;
    border: 1px solid #969696;
    background-color: transparent;
    appearance: none;
    font-size: 18px;
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

const Select = styled.select`
    width: 40%;
    line-height: 24px;
    font-size: 18px;
    padding: 4px;
`

const Option = styled.option`
    font-size: 18px;
`
const Alert = styled.span`
    color: red;
    font-size: 12px;
    font-family  : 'Kosugi Maru', sans-serif;
`
// ------------------- Styled components 

// Responsive Props--------------------
const CardSize = styled.div`
    width: 100%;

    @media (min-width: 768px) {
        width: 600px;
    }

    @media (min-width: 1024px) {
        width: 680px;
    }
`

// --------------- Responsive Props


const Selector = ({options, onChange} : {options : string[], onChange: (val : string) => void}) => {
    let optionList = [];
    for(let option of options){
        optionList.push(<Option value={option}>{option}</Option>);
    }


    return(
        <Select onChange={(event)=>{onChange(event.target.value)}}>
            {optionList}
        </Select>
    );
}

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
    const [prompt , setPrompt] = useState<string>("");
    const [ans , setAns]       = useState<string>("");
    const [memo , setMemo]     = useState<string>("");

    const [titleAlert, setTitleAlert]   = useState(false);
    const [aiAlert, setAiAlert]         = useState(false);
    const [promptAlert, setPromptAlert] = useState(false);
    const [ansAlert, setAnsAlert]       = useState(false);

    const [blockSend, setBlockSend] = useState(false);

    const [sendedModalTitle, setSendedModalTItle] = useState("");
    const [sendedModalMsg, setSendedModalMsg]     = useState("");
    const [showSendedModal, setShowSendModal]     = useState(false);
    const closeSendedModal = () => {
        setShowSendModal(false);
        window.location.href = "/";
    }

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

        if(prompt == ""){
            isOk = false;
            setPromptAlert(true);
        }

        if(ans == ""){
            isOk = false;
            setAnsAlert(true);
        }

        return isOk
    }

    const onSubmit = async () => {
        if(blockSend==true) return;
        if(_valid()==false) return;

        setBlockSend(true);

        const toPostPrompt = new ToPostPrompt({
            title  : title,
            prompt : prompt,
            ans    : ans,
            memo   : memo,
            aiName : AIType,
        })

        try {
            // Code that may throw an error
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
                                <SecSub>プロンプトの内容を一言で</SecSub>
                                <SpaceBox height={8}/>
                                <Input 
                                    onChange={(event)=>{setTitle(event.target.value)}}/>
                                <SpaceBox height={4}/>
                                {titleAlert && <Alert>**この項目は必ず入力して下さい</Alert>}

                                <SpaceBox height={32}/>

                                <SecTitle>タイプ</SecTitle>
                                <SecSub>どのAIを使った？</SecSub>
                                <SpaceBox height={8}/>
                                <Selector 
                                    options={["ChatGPT" ,"BARD"]}
                                    onChange={(val)=>{setAIType(val)}}/>
                                <SpaceBox height={4}/>
                                {aiAlert && <Alert>**この項目は必ず入力して下さい</Alert>}

                                <SpaceBox height={32}/>


                                <SecTitle>プロンプト</SecTitle>
                                <SecSub>AIになんと入力した？</SecSub>
                                <SpaceBox height={8}/>
                                <TextField 
                                    rows={20} 
                                    onChange={(event)=>{setPrompt(event.target.value)}}/>
                                <SpaceBox height={4}/>
                                {promptAlert && <Alert>**この項目は必ず入力して下さい</Alert>}

                                <SpaceBox height={32}/>

                                <SecTitle>返答</SecTitle>
                                <SecSub>AIはなんて返した？</SecSub>
                                <SpaceBox height={8}/>
                                <TextField 
                                    rows={20} 
                                    onChange={(event)=>{setAns(event.target.value)}}/>
                                <SpaceBox height={4}/>
                                {ansAlert && <Alert>**この項目は必ず入力して下さい</Alert>}

                                <SpaceBox height={32}/>

                                <SecTitle>メモ</SecTitle>
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