import styled from "styled-components";
import Header from "./components/basic/Header";
import SpaceBox from "./components/layout/SpaceBox";
import Back from "./components/basic/Back";
import Column from "./components/layout/Column";
import { usePostPrompt } from "../usecase/prompt_use_case";
import Row from "./components/layout/Row";
import Icon from "./components/basic/Icon";
import GrowSpace from "./components/layout/GrowSpace";
import { useRef, useState } from "react";
import Card from "./components/basic/Card";
import SecTitle from "./components/parts/post_page/SecTitle";




const PostPage = () => {
    //TODO
    // const onSubmit = () => {
    //     const { error, isLoading } = usePostPrompt();
        
    // }

    const [title , setTitle] = useState<string>("");
    

    const PostBtn = styled.div`
            width            : 100%;
            height           : 48px;
            background-color : #FF008A;
            color            : white;
            border-radius    : 3px;
            display          : flex;
            align-items      : center;
            justify-content  : center;
            filter           : drop-shadow(0px 5px 2px rgba(0, 0, 0, 0.41));
            font-family      : 'Kosugi Maru', sans-serif;
            font-size        : 20px;
        `


    return(
        <Back>
            <Header home/>

            <Column 
                padding={16}
                gap={16}>

                <SpaceBox height={56}/>

                <Card>
                    <Column padding={8}>
                        <SpaceBox height={16}/>
                            <SecTitle title="なんてプロンプトを入力した？"/>
                        <SpaceBox height={16}/>
                    </Column>
                </Card>
            </Column>
        </Back>
    );
}

export default PostPage;