import Header from "../components/module/Header";
import Icon from "../components/basic/Icon";
import { useState } from 'react';
import Mode from "../../domain/mode";
import Back from "../components/basic/Back";
import Fab from "../components/module/Fab";
import { useNavigate } from "react-router-dom";
import Clickable from "../components/basic/Clickable";
import ModeSelector from "../components/module/ModeSelector";
import Column from "../components/layout/Column";
import SpaceBox from "../components/layout/SpaceBox";
import { usePromptsByMode } from "../../hooks/usePromptByMode";
import PromptCard from "../components/module/PromptCard";

const HomePage = () => {
    
    const [mode, setMode]  = useState(Mode.Hot);
    const navigator = useNavigate();

    const onModeSelect = (mode : Mode) => {
        setMode(mode);
    }

    let promptCardList : JSX.Element[] = [];
    const { prompts, isLoading, error} = usePromptsByMode({mode : mode});
    if(isLoading){
        // promptCardList =  [(<Typo size={24}>Loading...</Typo>)];
    }
    if(error){
        // promptCardList =  [(<Typo size={24}> Error: {error}</Typo>)];
    }
    if(prompts != null){
        for(let prompt of prompts){
            promptCardList.push(
                <PromptCard prompt={prompt}/>
            )
        }
    }

    
    return(
    <Back>

        <Header shadow={false} menu/>
        
        <ModeSelector onSelect={(value)=>{onModeSelect(value)}} mode={mode}/>
        
        <Column 
            center
            color="#DCDCDC"
            padding={16}
            gap={20}>

            <SpaceBox height={116}/>

            {promptCardList}

            <SpaceBox height={56}/>
        </Column>

        <Clickable onClick={
            ()=>{navigator("/post")}
        }>
            <Fab>
                <Icon
                    size={36}
                    color="white" 
                    name="add"
                    />
            </Fab>
        </Clickable>    

    </Back>
    )   
}

export default HomePage;