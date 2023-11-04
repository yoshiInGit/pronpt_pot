import Header from "../components/module/Header";
import SpaceBox from "../components/layout/SpaceBox";
import Back from "../components/basic/Back";
import Column from "../components/layout/Column";
import { useState } from "react";
import Card from "../components/basic/Card";
import { ToPostPrompt } from "../../domain/prompt";
import { postPrompt } from "../../usecase/prompt_use_case";
import AlertDialog from "../components/module/AlertDialog";
import Typo from "../components/basic/Typo";
import Chat from "../components/module/Chat";
import AISelectDialog from "../components/module/AISelectDialog";
import { useNavigate } from "react-router-dom";
import ResponsiveWidth from "../components/layout/ResponsiveWidth";
import TextInput from "../components/module/TextInput";
import TextField from "../components/module/TextField";
import Selector from "../components/module/Selector";
import Button from "../components/module/Button";


const PostPage = () => {
    // Dialogs--------------------------
    const [showEmptyAlertDialog, setShowEmptyAlertDialog] = useState(false);
    const [showAISelectDialog, setShowAISelectDialog]     = useState(false);

    const [showSendedModal, setShowSendModal]     = useState(false);
    const [sendedModalTitle, setSendedModalTItle] = useState("");
    const [sendedModalMsg, setSendedModalMsg]     = useState("");
    
    const navigator = useNavigate();
    const closeSendedModal = () => {
        setShowSendModal(false);
        navigator("/")
    }

    const Dialogs = () => {
        return(
            <>
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
            </>
        );
    }

    // -------------------------- Dialogs


    // SendBtn -----------------------------------
    const [blockSend, setBlockSend] = useState(false);

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

    // ----------------------------------- SendBtn 

    
    const [titleAlert, setTitleAlert]   = useState(false);
    const [aiAlert, setAiAlert]         = useState(false);
    const [chatAlert, setChatALert]     = useState(false);

    const [AIType, setAIType]              = useState<string>("");
    const [title , setTitle]               = useState<string>("");
    const [conversation , setConversation] = useState<string[]>([]);
    const [memo , setMemo]                 = useState<string>("");


    return(
        <Back>
            <Dialogs/>            

            <Header home/>

            <Column 
                padding={16}
                gap={16}
                center>

                <SpaceBox height={56}/>

                <ResponsiveWidth>
                    <Card>
                        <Column padding={8}>
                            <SpaceBox height={16}/>
                                <Typo size={22} color="#333333">
                                    新しいプロンプトを投稿する
                                </Typo>

                                <SpaceBox height={40}/>

                                <Typo size={16}>
                                    タイトル
                                </Typo>
                                <SpaceBox height={4}/>
                                <Typo size={10} color="#7f7f7f">
                                    プロンプトの内容を一言で
                                </Typo>
                                <SpaceBox height={8}/>
                                <TextInput 
                                    onChange={(event)=>{setTitle(event.target.value)}}/>
                                <SpaceBox height={4}/>
                                {titleAlert && <Typo size={10} color="red">**この項目は必ず入力して下さい</Typo>}

                                <SpaceBox height={24}/>

                                <Typo size={16}>
                                    モデル
                                </Typo>
                                <SpaceBox height={4}/>
                                <Typo size={10} color="#7f7f7f">
                                    どのAIを使った？
                                </Typo>
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


                                <Typo size={16}>
                                    会話
                                </Typo>
                                <SpaceBox height={4}/>
                                <Typo size={10} color="#7f7f7f">
                                    AIとの会話を書こう
                                </Typo>
                                <SpaceBox height={4}/>
                                {chatAlert && <Typo size={10} color="red">**この項目は必ず入力して下さい</Typo>}

                                <SpaceBox height={20}/>

                                <Chat 
                                    setConversation={(conversation : string[])=>{
                                        setConversation([...conversation]);
                                    }}/>

                                <SpaceBox height={52}/>

                                <Typo size={16}>
                                    メモ(任意)
                                </Typo>
                                <SpaceBox height={4}/>
                                <Typo size={10} color="#7f7f7f">
                                    補足しておきたいこと
                                </Typo>
                                <SpaceBox height={8}/>
                                <TextField 
                                    rows={8}
                                    onChange={(event)=>{setMemo(event.target.value)}}/>


                            <SpaceBox height={16}/>
                        </Column>
                    </Card>
                </ResponsiveWidth>

                <ResponsiveWidth>
                    <Button onClick={onSubmit}>投稿する</Button>
                </ResponsiveWidth>
                
                <SpaceBox height={32}/>
            </Column>
        </Back>
    );
}

export default PostPage;