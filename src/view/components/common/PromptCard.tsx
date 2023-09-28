import styled from "styled-components";
import SpaceBox from "../layout/SpaceBox";
import Card from "../basic/Card";
import GrowSpace from "../layout/GrowSpace";
import Icon from "../basic/Icon";
import Column from "../layout/Column";
import Row from "../layout/Row";


const PromptCard = ({prompt} : {prompt : Prompt}) => {
    const Head = () => {

        const Wrapper = styled.div`
            width       : 100%;
            display     : flex;
            align-items : center;
            gap         : 12px;
        `
        const User = styled.span`
            color: #333333;
            text-decoration: underline;
        `
        return(
            <Wrapper>
                <User>{prompt.user.name}</User>
                <GrowSpace/>
                <Icon name="link"/>
                <Icon name="content_copy"/>
            </Wrapper>
        );
    }

    const Title = styled.div`
        width        : 100%;
        display      : flex;
        align-items  : center;
        height       : 40px;
        font-weight  : bold;
        color        : #333333;
        font-family  : 'Kosugi Maru', sans-serif;
    `

    const Prompt = styled.div`
        color: #686868;
        font-size: 8px;
    `

    const Msg = styled.div`
        color: black;
        font-size: 12px;
    `

    const Footer = () => {
        const Wrapper = styled.div`
            width: 100%;
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

        return(
            <Wrapper>
                <Row center>
                    <Icon color="#FF004D" name="bookmark_border"/>
                    <BookNum>{prompt.book}</BookNum>

                    <SpaceBox width={8}/>

                    <AIName>{prompt.aiName}</AIName>

                    <GrowSpace/>
                </Row>
            </Wrapper>
        );
    }

    return(
        <Card>
            <Column
                center
                padding={28}>
                    <SpaceBox height={16}/>

                    <Head/>

                    <Title>{prompt.title}</Title>

                    <Prompt>{prompt.prompt}</Prompt>

                    <SpaceBox height={16}/>

                    <Msg>
                        Ex
                        <br></br>
                        {prompt.ans}
                    </Msg>

                    <SpaceBox height={28}/>

                    <Footer/>

                    <SpaceBox height={12}/>

            </Column>

        </Card>
    );
}

export default PromptCard;