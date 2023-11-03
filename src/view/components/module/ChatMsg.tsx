import styled from "styled-components"
import GrowSpace from "../../layout/GrowSpace"
import Row from "../../layout/Row"
import SpaceBox from "../../layout/SpaceBox"
import Icon from "../basic/Icon"
import Typo from "../basic/Typo"
import Center from "../../layout/Center"

const ChatIconContainer = styled.div`
    width  : 40px;
    height : 40px;

    background-color: #ff4980;

    border-radius: 2px;
`

const ChatMsgWrapper = styled.div`
    width: 80%;
`


const ChatMsg = ({msg, isAI} : {msg : string, isAI : boolean}) => {
    return(
        <Row>
            <ChatIconContainer>
                <Center>
                    <Icon name={isAI ? "smart_toy" : "person"} color="white" size={32}/>
                </Center>
            </ChatIconContainer>

            <SpaceBox width={8}/>

            <GrowSpace/>

            <ChatMsgWrapper>
                <Typo size={14} lineBreak>
                    {msg}
                </Typo>
            </ChatMsgWrapper>

            <GrowSpace/>

            <SpaceBox width={8}/>

            <Icon name="content_copy" size={20}/>
        </Row>
    )
}

export default ChatMsg;