import styled from "styled-components"
import Header from "./components/basic/Header";
import PromptCard from "./components/common/PromptCard";
import SpaceBox from "./components/layout/SpaceBox";
import Column from "./components/layout/Column";
import Icon from "./components/basic/Icon";
import { useState } from 'react';
import { usePromptsByMode } from "../usecase/prompt_use_case";
import Mode from "../domain/mode";
import Back from "./components/basic/Back";
import Fab from "./components/basic/Fab";

const HomePage = () => {
    const [mode, setMode] = useState(Mode.Hot);
    
    const {prompts, isLoading, error} = usePromptsByMode({mode : mode});

    const onModeClick = (mode : Mode) => {
        setMode(mode);
    }

    const Selector = () => {
        const SelectorWrapper = styled.div`
            z-index          : 100;
            position         : fixed;
            top              : 56px;
            width            : 100%;
            height           : 56px;
            background-color : white;
            filter           : drop-shadow(0px 5px 2px rgba(0, 0, 0, 0.41));
            display          : flex;
        `

        const SelectorBtn = styled.div<{isActive : boolean}>`
            flex-grow       : 1;
            display         : flex;
            flex-direction  : column;
            align-items     : center;
            justify-content : center;
            ${(props) => props.isActive && `color: #A7005A;`};
        `

        const SelectorItemName = styled.span`
            font-family : 'Roboto', sans-serif;
            font-weight : bolder;
            font-size   : 12px;
        `
        return(
            <SelectorWrapper>
                <SelectorBtn 
                    isActive={mode == Mode.Hot}
                    onClick={()=>onModeClick(Mode.Hot)}>
                    <Icon name="local_fire_department"/>
                    <SelectorItemName>Hot</SelectorItemName>
                 </SelectorBtn>

                 <SelectorBtn 
                    isActive={mode == Mode.New}
                    onClick={()=>onModeClick(Mode.New)}>
                    <Icon name="lightbulb_outline"/>
                    <SelectorItemName>New</SelectorItemName>
                 </SelectorBtn>

                 <SelectorBtn 
                    isActive={mode == Mode.Random}
                    onClick={()=>onModeClick(Mode.Random)}>
                    <Icon name="shuffle"/>
                    <SelectorItemName>Random</SelectorItemName>
                 </SelectorBtn>             
            </SelectorWrapper>
        );
    };


    let promptList = [];
    for(let prompt of prompts){
        promptList.push(<PromptCard prompt={prompt}/>)
    }

    return(
    <>
    <Back>
        <Header isShadow={false} menu/>
        <Selector/>
        <Column 
            center
            color="#DCDCDC"
            padding={16}
            gap={20}>
                <SpaceBox height={116}/>
                
                {promptList}

                <SpaceBox height={56}/>
        </Column>

        <Fab>
            <Icon
                size={36}
                color="white" 
                name="add"
                />
        </Fab>
    </Back>
    </>
    )   
}

export default HomePage;