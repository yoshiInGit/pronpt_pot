import Header from "../components/module/Header";
import Back from "../components/basic/Back";
import Column from "../components/layout/Column";
import Card from "../components/basic/Card";
import SpaceBox from "../components/layout/SpaceBox";
import Row from "../components/layout/Row";
import GrowSpace from "../components/layout/GrowSpace";
import Icon from "../components/basic/Icon";
import Typo from "../components/basic/Typo";
import Fab from "../components/module/Fab";
import ResponsiveWidth from "../components/layout/ResponsiveWidth";
import User from "../components/module/User";
import AITag from "../components/module/AITag";
import ChatMsg from "../components/module/ChatMsg";
import { useParams } from "react-router-dom";
import { usePrompt } from "../../hooks/usePrompt";

const PromptPage = () => {
    let {promptId} = useParams();

    if(promptId==undefined) promptId = "";
    
    const { prompt, isLoading, error } = usePrompt({id : promptId});

    if(isLoading){
        //TODO
    }

    if(error){
        //TODO
    }

    const chat = prompt?.chat ?? []; 
    const chatMsgs = [];
    for(let i=0;i< chat.length ;i++){
        chatMsgs.push(<ChatMsg msg={chat[i]} isAI={i%2 == 1}/>)
    }

    return(
        <Back>
            <Header home/>

            <Column center padding={16}>
                <SpaceBox height={80}/>
                <ResponsiveWidth>
                    <Card>
                        <Column padding={16} gap={8}>
                            <SpaceBox height={16}/>
                            <Row center>
                                <User>{prompt?.userName}</User>
                                <GrowSpace/>
                                <Icon name="link"/>
                                <SpaceBox width={16}/>
                                <Icon 
                                    clickable
                                    color="#ff4980" 
                                    name={prompt?.isBooked ? "bookmark" : "bookmark_border"}/>
                                <Typo size={16} color="#FF004D">{prompt?.book}</Typo>
                                <SpaceBox width={16}/>
                                <AITag>{prompt?.aiName}</AITag>
                            </Row>


                            <SpaceBox height={12}/>
                            <Typo size={18} fontWeight="bold">{prompt?.title}</Typo>                            
                            <SpaceBox height={8}/>
                            
                            <Column gap={16}>
                                {chatMsgs}
                            </Column>

                            <SpaceBox height={12}/>
                            
                            {prompt?.memo != "" && <Typo size={14} color="#383838">[MEMO]</Typo>}
                            <Typo size={14} color="#383838">{prompt?.memo}</Typo>
                            <SpaceBox height={16}/>
                        </Column>
                    </Card>
                </ResponsiveWidth>

                <SpaceBox height={16}/>
            </Column>

            <Fab>
                X
            </Fab>

        </Back>
    )
}

export default PromptPage;