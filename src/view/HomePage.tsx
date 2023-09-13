import styled from "styled-components"
import Header from "./compionents/Header";
import PromptCard from "./compionents/PromptCard";
import SpaceBox from "./compionents/SpaceBox";
import Fab from "./compionents/fab";

const Back = styled.div`
    background-color: #DCDCDC;
    width: 100%;
    height: 100vh;
`

// Selector
const SelectorWrapper = styled.div`
    z-index: 100;
    position: fixed;
    top: 56px;
    width: 100%;
    height: 56px;
    background-color: white;
    filter: drop-shadow(0px 5px 2px rgba(0, 0, 0, 0.41));
    display: flex;
`
const SelectorBtn = styled.div<{isActive : boolean}>`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${(props) => props.isActive && `color: #A7005A;`};
`
const SelectorItemIcon = styled.span`

`

const SelectorItemName = styled.span`
    font-family: 'Lacquer', cursive;
    font-family: 'Press Start 2P', cursive;
    font-family: 'Roboto', sans-serif;
    font-weight: bolder;
    font-size: 12px;
`

const Body = styled.div`
    display: flex;
`

const Content = styled.div`
    flex-grow: 1;
`

const Selector = () => (
    <>
        <SelectorWrapper>
            <SelectorBtn isActive={true}>
                <SelectorItemIcon className="material-icons">local_fire_department</SelectorItemIcon>
                <SelectorItemName>Hot</SelectorItemName>
            </SelectorBtn>

            <SelectorBtn isActive={false}>
                <SelectorItemIcon className="material-icons">lightbulb_outline</SelectorItemIcon>
                <SelectorItemName>New</SelectorItemName>
            </SelectorBtn>

            <SelectorBtn isActive={false}>
                <SelectorItemIcon className="material-icons">shuffle</SelectorItemIcon>
                <SelectorItemName>Random</SelectorItemName>
            </SelectorBtn>
        </SelectorWrapper>

        <SpaceBox height={140}/>

        <Body>
            <SpaceBox width={16}/>
            <Content>
                <PromptCard/>
                <SpaceBox height={20}/>
                <PromptCard/>
                <SpaceBox height={20}/>
                <PromptCard/>
                <SpaceBox height={20}/>


            </Content>
            <SpaceBox width={16}/>
        </Body>

        <Fab/>
    </>
);

const HomePage = () => {
    return(
    <>
        <Back>
            <Header isShadow={false}/>
            <Selector/>
        </Back>
    </>
    )   
}

export default HomePage;