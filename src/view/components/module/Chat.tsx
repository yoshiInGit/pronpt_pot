import styled from "styled-components";
import SpaceBox from "../layout/SpaceBox";
import Typo from "../basic/Typo";
import { useEffect, useState } from "react";
import Column from "../layout/Column";
import Row from "../layout/Row";
import Card from "../basic/Card";
import SizedBox from "../layout/SizedBox";
import Icon from "../basic/Icon";
import GrowSpace from "../layout/GrowSpace";
import Clickable from "../basic/Clickable";

const TextField = styled.textarea`
    font-family   : 'Kosugi Maru', sans-serif;
    resize        : none;
    border-radius : 4px;
    appearance    : none;
    border        : 1px solid #969696;
    font-size     : 12px;
    padding       : 8px;
`

const Chat = ({setConversation} : {setConversation : (conversation : string[])=>void}) => {
    const [chatRecord, setChatRecord] = useState<string[]>(["", ""]);

    const updateChatRecord = ({text, idx} : {text : string, idx : number}) => {
        chatRecord[idx] = text;
        setChatRecord(chatRecord);
    }

    useEffect(()=>{
        setConversation(chatRecord);
    },[chatRecord]);

    const chat : JSX.Element[] = [];
    for(let i=0; i < chatRecord.length; i++){
        if(i % 2 == 0){ //YOU
            chat.push(
                <>
                    <Typo size={14}>
                        [YOU]:
                    </Typo>
                    <SpaceBox height={8}/>
                    <TextField 
                        rows={15} 
                        onChange={(event)=>{updateChatRecord({text : event.target.value, idx : i})}}/>
                    <SpaceBox height={4}/>

                    <SpaceBox height={18}/>
                </>
            )   

        }else{  //AI 
            chat.push( 
                <>
                    <Typo size={14}>
                        {">> [AI]:"}
                    </Typo>
                    <SpaceBox height={8}/>
                    <TextField 
                        rows={25} 
                        onChange={(event)=>{updateChatRecord({text : event.target.value, idx : i})}}/>
                    <SpaceBox height={18}/>
                </>
            )
        }
    }


    const controller = () => {
        const canRemoveChat = chatRecord.length >= 4;

        const addChat = () => {

            chatRecord.push("");
            chatRecord.push("");

            setChatRecord([...chatRecord]);
        }

        const removeChat = () => {
            chatRecord.pop()
            chatRecord.pop()

            setChatRecord([...chatRecord]);
        }


        return(
            <Row center gap={28}>
                <GrowSpace/>
                <Clickable onClick={addChat}>
                    <SizedBox width={100}>
                        <Card>
                            <Column center>
                                <SpaceBox height={16}/>
                                <Typo size={12}>
                                    会話を追加
                                </Typo>
                                <Icon name="add"/>
                                <SpaceBox height={8}/>
                            </Column>
                        </Card>
                    </SizedBox>
                </Clickable>

                { canRemoveChat &&
                    <Clickable onClick={removeChat}>
                        <SizedBox width={100}>
                            <Card>
                                <Column center>
                                    <SpaceBox height={16}/>
                                    <Typo size={12}>
                                        会話を削除
                                    </Typo>
                                    <Icon name="remove"/>
                                    <SpaceBox height={8}/>
                                </Column>
                            </Card>
                        </SizedBox>
                    </Clickable>
                }
                <GrowSpace/>
            </Row>
        )
    }


    return(
        <Column>
            {chat}

            {controller()}
        </Column>
    );
}

export default Chat;