import Header from "../components/module/Header";
import PromptCard from "../components/module/PromptCard";
import SpaceBox from "../layout/SpaceBox";
import Column from "../layout/Column";
import Icon from "../components/basic/Icon";
import { useState } from 'react';
import { usePromptsByMode } from "../../usecase/prompt_use_case";
import Mode from "../../domain/mode";
import Back from "../components/basic/Back";
import Fab from "../components/module/Fab";
import { useNavigate } from "react-router-dom";
import Clickable from "../components/basic/Clickable";
import ModeSelector from "../components/module/ModeSelector";


const HomePage = () => {

    const navigator = useNavigate();

    const [mode, setMode] = useState(Mode.Hot);

    const {toShowPrompts, isLoading, error} = usePromptsByMode({mode : mode});

    let promptList : JSX.Element[] = [];
    for(let prompt of toShowPrompts){
        promptList.push(
            <PromptCard prompt={prompt}/>
        )
    }

    const onModeSelect = (mode : Mode) => {
        setMode(mode);
    }

    return(
    <Back>

        <Header shadow={false} menu/>
        
        <ModeSelector onSelect={onModeSelect} mode={mode}/>
        
        <Column 
            center
            color="#DCDCDC"
            padding={16}
            gap={20}>

            <SpaceBox height={116}/>

            {promptList}

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