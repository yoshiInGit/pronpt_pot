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


const HomePage = () => {

    const navigator = useNavigate();

    const [mode, setMode] = useState(Mode.Hot);


    let promptCardList : JSX.Element[] = [];

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