import styled from "styled-components";
import SpaceBox from "../layout/SpaceBox";
import Card from "../basic/Card";
import GrowSpace from "../layout/GrowSpace";
import Icon from "../basic/Icon";
import Column from "../layout/Column";
import Row from "../layout/Row";
import { useSimpleUser } from "../../../usecase/user_use_case";
import { Prompt } from "../../../domain/prompt";

// styled Components --------------------
const HeadWrapper = styled.div`
    width       : 100%;
    display     : flex;
    align-items : center;
    gap         : 12px;
`
const User = styled.span`
    color: #333333;
    text-decoration: underline;
`
const Title = styled.div`
    width        : 100%;
    display      : flex;
    align-items  : center;
    height       : 40px;
    font-weight  : bold;
    color        : #333333;
    font-family  : 'Kosugi Maru', sans-serif;
`

const PromptTxt = styled.div`
    width: 100%;
    color: #686868;
`

const Msg = styled.div`
    width: 100%;
    color: black;
    font-family  : 'Kosugi Maru', sans-serif;
`

const FooterWrapper = styled.div`
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
// -------------------- styled Components 

// Responsive Props ----------------------------
const CardWrapper = styled.div`
    width: 100%;

    @media (min-width: 768px) {
        width: 600px;
    }

    @media (min-width: 1024px) {
        width: 680px;
    }
`
const PromptSize = styled.span`
    font-size: 12px;

    @media (min-width: 768px) {
    }

    @media (min-width: 1024px) {
        font-size: 12px;
    }
`

const MsgSize = styled.span`
    font-size: 12px;

    @media (min-width: 768px) {
    }

    @media (min-width: 1024px) {
        font-size: 14px;
    }
`
// ---------------------------- Responsive Props 


const PromptCard = ({prompt, booked} : {prompt : Prompt, booked : boolean}) => {
    const {user, isLoading, error} = useSimpleUser({id :prompt.userId});
    
    let userName : string | undefined = "";
    if(isLoading==false && error==undefined){
        userName = user?.name;
    }

    const Head = () => {
        return(
            <HeadWrapper>
                <User>{userName}</User>
                <GrowSpace/>
                <Icon name="link" clickable/>
                <Icon name="content_copy" clickable/>
            </HeadWrapper>
        );
    }

    
    const Footer = () => {
        return(
            <FooterWrapper>
                <Row center>
                    <Icon color="#ff4980" name={booked ? "bookmark" : "bookmark_border"} clickable/>
                    <BookNum>{prompt.book}</BookNum>

                    <SpaceBox width={8}/>

                    <AIName>{prompt.aiName}</AIName>

                    <GrowSpace/>
                </Row>
            </FooterWrapper>
        );
    }

    return(
        <CardWrapper>
            <Card>
                <Column
                    center
                    padding={12}>
                        <SpaceBox height={16}/>
                        <Head/>
                        <Title>{prompt.title}</Title>
                        <PromptTxt>
                            <PromptSize>
                                {">> "}
                                {prompt.prompt}
                            </PromptSize>
                        </PromptTxt>
                        <SpaceBox height={16}/>
                        <Msg>
                            <MsgSize>
                                {"[Example Answer]:"}
                                <br></br>
                                {prompt.truncateAns()}
                            </MsgSize>
                        </Msg>
                        <SpaceBox height={28}/>
                        <Footer/>
                        <SpaceBox height={12}/>
                </Column>
            </Card>
        </CardWrapper>
    );
}

export default PromptCard;