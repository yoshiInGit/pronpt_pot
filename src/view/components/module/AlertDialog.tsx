import styled from "styled-components";
import Card from "../basic/Card";
import Column from "../layout/Column";
import Row from "../layout/Row";
import GrowSpace from "../layout/GrowSpace";
import SpaceBox from "../layout/SpaceBox";

const Wrapper = styled.div`
    position: fixed;
    top    : 0;
    bottom : 0;
    right  : 0;
    left   : 0;
    background-color: #00000091;
    z-index: 500;
`

const Content = styled.div`
    position : fixed;
    top      : 50%;
    left     : 50%;
    transform: translate(-50%, -50%);
    font-family  : 'Kosugi Maru', sans-serif;
    
    width    : 90%;

    @media (min-width: 768px) {
        width: 40%;
    }

    @media (min-width: 1024px) {
        width: 40%;
    }

`

const Title = styled.div`

    font-size: 18px;

    @media (min-width: 768px) {
        font-size: 18px;        
    }

    @media (min-width: 1024px) {
        font-size: 18px;       
    }
    
`

const Body = styled.div`
    white-space: pre-line;
    font-size: 14px;        

    @media (min-width: 768px) {
        font-size: 14px;        
    }

    @media (min-width: 1024px) {
        font-size: 14px;       
    }
    
`

const TextButton = styled.div`
    font-size: 18px;
    color : #FF004D;
    cursor: pointer;
`

const AlertDialog = ({title, message ,show, onOK} : {title : string, message : string, show : boolean, onOK : ()=>void}) => {
    if(show==false){
        return(<></>);
    }

    return(
        <Wrapper>
            <Content>
                <Card>
                    <Column padding={12}>
                        <SpaceBox height={8}/>
                        <Title>{title}</Title>
                        <SpaceBox height={24}/>
                        <Body>
                            {message}
                        </Body>

                        <SpaceBox height={44}/>

                        <Row>
                            <GrowSpace/>
                            <TextButton onClick={onOK}>OK</TextButton>
                        </Row>
                        <SpaceBox height={8}/>
                    </Column>
                </Card>
            </Content>
        </Wrapper>
    );
}

export default AlertDialog;