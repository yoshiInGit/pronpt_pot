import styled from "styled-components";
import SpaceBox from "../layout/SpaceBox";
import Card from "../basic/Card";
import GrowSpace from "../layout/GrowSpace";
import Icon from "../basic/Icon";
import Column from "../layout/Column";
import Row from "../layout/Row";
import { ToShowPrompt } from "../../../domain/prompt";
import { useState } from "react";

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
    font-size: 14px;
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

const CardWrapper = styled.div`
    cursor: pointer;
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
// -------------------- styled Components 



const PromptCard = ({prompt} : {prompt : ToShowPrompt}) => {
    
    const [isLinkAct, setIsLinkAct] = useState(false);
    const [isCopyAct, setIsCopyAct] = useState(false);
    const Head = () => {
        const onLinkCopy = () =>{
            //TODO

            setIsLinkAct(true);

            setTimeout(() => {
                setIsLinkAct(false);
            }, 1500);
        }

        const onPromptCopy = () =>{
            navigator.clipboard.writeText(prompt.conversation[0]);

            setIsCopyAct(true);
            setTimeout(() => {
                setIsCopyAct(false);
            }, 1500);
        }


        return(
            <HeadWrapper>
                <User>{prompt.userName}</User>
                <GrowSpace/>
                <div onClick={onLinkCopy}><Icon name={isLinkAct ? "done" : "link"} clickable/></div>
                <div onClick={onPromptCopy}><Icon name={isCopyAct ? "done" : "content_copy"} clickable/></div>
            </HeadWrapper>
        );
    }


    const [booked, setBooked] = useState<boolean>(prompt.isBooked);
    const [bookedNum , setBookedNum] = useState<number>(prompt.book);

    const Footer = () => {
        const onBookClick = () => {
            //TODO update MySelf

            if(booked==true){
                setBookedNum(bookedNum - 1);
            }else{
                setBookedNum(bookedNum + 1);
            }

            setBooked(!booked);
        }

        return(
            <FooterWrapper>
                <Row center>
                    <div onClick={onBookClick}>
                        <Icon 
                            clickable
                            color="#ff4980" 
                            name={booked ? "bookmark" : "bookmark_border"}/>
                    </div>
                    <BookNum>{bookedNum}</BookNum>

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
                                {prompt.truncatePrompt()}
                            </PromptSize>
                        </PromptTxt>
                        <SpaceBox height={16}/>
                        <Msg>
                            <MsgSize>
                                {`[${prompt.aiName}]:`}
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