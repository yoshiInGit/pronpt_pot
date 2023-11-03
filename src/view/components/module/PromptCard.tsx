import styled from "styled-components";
import SpaceBox from "../../layout/SpaceBox";
import Card from "../basic/Card";
import GrowSpace from "../../layout/GrowSpace";
import Icon from "../basic/Icon";
import Column from "../../layout/Column";
import Row from "../../layout/Row";
import { ToShowPrompt } from "../../../domain/prompt";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ResponsiveWidth from "../../layout/ResponsiveWidth";
import Typo from "../basic/Typo";
import AITag from "./AITag";
import Center from "../../layout/Center";
import User from "./User";
import Clickable from "../basic/Clickable";

// styled Components --------------------
const HeadWrapper = styled.div`
    width       : 100%;
    display     : flex;
    align-items : center;
    gap         : 12px;
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

const PromptCard = ({prompt} : {prompt : ToShowPrompt}) => {

    const navigate = useNavigate();
    const onCardClick = ()=> {
        navigate(`/prompt/${prompt.uuid}`)
    }
    
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
                        <Center>
                        <Icon 
                            clickable
                            color="#ff4980" 
                            name={booked ? "bookmark" : "bookmark_border"}/>
                        </Center>
                    </div>
                    <Typo size={16} color="#FF004D">
                        {bookedNum}
                    </Typo>

                    <SpaceBox width={8}/>

                    <AITag>{prompt.aiName}</AITag>

                    <GrowSpace/>
                </Row>
            </FooterWrapper>
        );
    }

    return(
        <ResponsiveWidth onClick={onCardClick}>
            <Clickable>
                <Card>
                    <Column
                        center
                        padding={12}>
                            <SpaceBox height={16}/>
                            <Head/>
                            <Title>{prompt.title}</Title>
                            <PromptTxt>
                                <Typo size={12}>
                                    {">> "}
                                    {prompt.truncatePrompt()}
                                </Typo>
                            </PromptTxt>
                            <SpaceBox height={16}/>
                            <Msg>
                                <Typo size={14}>
                                    {`[${prompt.aiName}]:`}
                                    <br></br>
                                    {prompt.truncateAns()}
                                </Typo>
                            </Msg>
                            <SpaceBox height={28}/>
                            <Footer/>
                            <SpaceBox height={12}/>
                    </Column>
                </Card>
            </Clickable>
        </ResponsiveWidth>
    );
}

export default PromptCard;