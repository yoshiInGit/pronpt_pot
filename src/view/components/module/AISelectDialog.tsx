import styled from "styled-components";
import Card from "../basic/Card";
import Column from "../layout/Column";
import Typo from "../basic/Typo";
import SpaceBox from "../layout/SpaceBox";
import Clickable from "../basic/Clickable";

const DialogWrapper = styled.div`
    position: fixed;
    top    : 0;
    bottom : 0;
    right  : 0;
    left   : 0;
    background-color: #00000091;
    z-index: 500;
`

const Dialog = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 80%;

    
    @media (min-width: 768px) {
    }

    @media (min-width: 1024px) {
        width: 20%;
    }
`

const AIList = styled.div`
    height: 320px;
    overflow: scroll;
    overflow-x: hidden;
`

const AISelectDialog = ({show, onSelect} : {show : boolean, onSelect : (value : string)=>void}) => {
    if(show==false){
        return(<></>);
    }

    return(
        <DialogWrapper>
            <Dialog>
                <Card>
                    
                        <Column padding={8}>
                            <SpaceBox height={8}/>
                            <Typo size={16} color="#242424">AIを選ぶ</Typo>
                            <SpaceBox height={16}/>
                            <AIList>
                                <Column gap={16}>
                                    <Clickable onClick={()=>{onSelect("ChatGPT")}}><Typo size={20}>ChatGPT</Typo></Clickable>
                                    <Clickable onClick={()=>{onSelect("BARD")}}><Typo size={20}>BARD</Typo></Clickable>
                                </Column>
                            </AIList>
                            <SpaceBox height={8}/>
                        </Column>
                </Card>
            </Dialog>
        </DialogWrapper>
    );
}

export default AISelectDialog;