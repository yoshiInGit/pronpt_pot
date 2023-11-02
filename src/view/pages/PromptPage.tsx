import Header from "../components/module/Header";
import Back from "../components/basic/Back";
import styled from "styled-components";
import Column from "../layout/Column";
import Card from "../components/basic/Card";
import SpaceBox from "../layout/SpaceBox";
import Row from "../layout/Row";
import GrowSpace from "../layout/GrowSpace";
import Icon from "../components/basic/Icon";
import Typo from "../components/basic/Typo";
import Center from "../layout/Center";
import Fab from "../components/module/Fab";

const CardWrapper = styled.div`
    width: 100%;

    @media (min-width: 768px) {
        width: 600px;
    }

    @media (min-width: 1024px) {
        width: 680px;
    }
`
const User = styled.span`
    color: #333333;
    text-decoration: underline;
    font-size: 14px;
`

const BookNum = styled.span`
    font-size: 16px;
    color : #FF004D;
    font-weight: 600;
`
const AIName = styled.div`
    width: 64px;
    height: 20px;
    background-color: #0AA924;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    color: white;
    font-size: 12px;
`

const Head = () => {
    return(
        <Row center>
            <User>user</User>
            <GrowSpace/>
            <Icon name="link"/>
            <SpaceBox width={16}/>
            <Icon 
                clickable
                color="#ff4980" 
                name={true ? "bookmark" : "bookmark_border"}/>
            <BookNum>12</BookNum>

            <SpaceBox width={16}/>

            <AIName>BARD</AIName>

        </Row>
    )
}

const Title = () => {
    return(
        <Typo size={18} fontWeight="bold">タイトル</Typo>
    )
}

const ChatIconContainer = styled.div`
    width  : 40px;
    height : 40px;

    background-color: #ff4980;

    border-radius: 2px;
`

const ChatMsgWrapper = styled.div`
    width: 80%;
`

const Chat = () => {
    const Msg = () => {
        return(
            <Row>
                <ChatIconContainer>
                    <Center>
                        <Icon name="smart_toy" color="white" size={32}/>
                    </Center>
                </ChatIconContainer>

                <SpaceBox width={8}/>

                <GrowSpace/>

                <ChatMsgWrapper>
                    <Typo size={14} lineBreak>
                        {`もちろんです。以下にいくつかの短いメッセージを提案します：
                            1. つらい時でも、君の笑顔がいつも僕らを幸せにしてくれるよ。
                            2. この子猫のように、君もいつもかわいらしい存在だよ。
                            3. 今日は君のために、癒しの子猫をお届け！
                            4. 一日一回、この子猫のように心をリフレッシュしよう！
                            5. 一緒に遊ぼう！君の笑顔が待ってるよ！

                            これらのメッセージが友人を少しでも元気づけることを願っています。`}
                    </Typo>
                </ChatMsgWrapper>

                <GrowSpace/>

                <SpaceBox width={8}/>

                <Icon name="content_copy" size={20}/>
            </Row>
        )
    }

    return(
        <Column gap={16}>
                <Msg/>
                <Msg/>
                <Msg/>
                <Msg/>
        </Column>
    )
}

const Memo = () => {
    return(
        <>
            <Typo size={14} color="#383838">[MEMO]</Typo>
            <Typo size={14} color="#383838">メモメモメモ</Typo>
        </>
    );
}

const PromptPage = () => {

    

    return(
        <Back>
            <Header home/>

            <Column center padding={16}>
                <SpaceBox height={80}/>
                <CardWrapper>
                    <Card>
                        <Column padding={16} gap={8}>
                            <SpaceBox height={16}/>
                            <Head/>
                            <SpaceBox height={12}/>
                            <Title/>
                            <SpaceBox height={8}/>
                            <Chat/>

                            <SpaceBox height={12}/>
                            
                            <Memo/>
                            <SpaceBox height={16}/>
                        </Column>
                    </Card>
                </CardWrapper>

                <SpaceBox height={16}/>
            </Column>

            <Fab>
                X
            </Fab>

        </Back>
    )
}

export default PromptPage;