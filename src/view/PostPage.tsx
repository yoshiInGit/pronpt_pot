import styled from "styled-components";
import Header from "./components/basic/Header";
import SpaceBox from "./components/layout/SpaceBox";
import Back from "./components/basic/Back";
import Column from "./components/layout/Column";
import { usePostPrompt } from "../usecase/prompt_use_case";
import { useState } from "react";
import Card from "./components/basic/Card";


const PostTitle = styled.div`
    font-family  : 'Kosugi Maru', sans-serif;
    font-size: 22px;
    font-weight: 500;
    color: #333333;

`

const SecTitle = styled.div`
    font-family  : 'Kosugi Maru', sans-serif;
    font-size: 18px;

`

const SecSub = styled.div`
    font-family  : 'Kosugi Maru', sans-serif;
    font-size: 14px;
    color: #7f7f7f;
`

const Input = styled.input`
    font-family  : 'Kosugi Maru', sans-serif;
    border: 1px solid #969696;
    background-color: transparent;
    appearance: none;
    font-size: 18px;
    padding: 2px;
    line-height: 30px;
    border-radius: 4px;
`

const TextField = styled.textarea`
    font-family  : 'Kosugi Maru', sans-serif;
    resize: none;
    border-radius: 4px;
    appearance: none;
    border: 1px solid #969696;
    font-size: 12px;
    padding: 8px;
`

const Select = styled.select`
    width: 40%;
    line-height: 32px;
    font-size: 22px;
    padding: 4px;
`

const Option = styled.option`
    font-size: 18px;
`

const Selector = ({options, onChange} : {options : string[], onChange: (val : string) => void}) => {
    let optionList = [];
    for(let option of options){
        optionList.push(<Option value={option}>{option}</Option>);
    }


    return(
        <Select onChange={(event)=>{onChange(event.target.value)}}>
            {optionList}
        </Select>
    );
}

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
    cursor: pointer;
`

const PostPage = () => {
    //TODO
    const onSubmit = () => {
    }

    const [title , setTitle]   = useState<string>("");
    const [AIType, setAIType]  = useState<string>("");
    const [prompt , setPrompt] = useState<string>("");
    const [ans , setAns]       = useState<string>("");
    const [memo , setMemo]     = useState<string>("");


    
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
                            <PostTitle>新しいプロンプトを投稿する</PostTitle>

                            <SpaceBox height={40}/>
                           
                            <SecTitle>タイトル</SecTitle>
                            <SecSub>プロンプトの内容を一言で</SecSub>
                            <SpaceBox height={8}/>
                            <Input 
                                onChange={(event)=>{setTitle(event.target.value)}}/>

                            <SpaceBox height={32}/>

                            <SecTitle>タイプ</SecTitle>
                            <SecSub>どのAIを使った？</SecSub>
                            <SpaceBox height={8}/>
                            <Selector 
                                options={["ChatGPT" ,"BARD"]}
                                onChange={(val)=>{setAIType(val)}}/>

                            <SpaceBox height={32}/>


                            <SecTitle>プロンプト</SecTitle>
                            <SecSub>AIになんと入力した？</SecSub>
                            <SpaceBox height={8}/>
                            <TextField 
                                rows={20} 
                                onChange={(event)=>{setPrompt(event.target.value)}}/>

                            <SpaceBox height={32}/>

                            <SecTitle>返答</SecTitle>
                            <SecSub>AIはなんて返した？</SecSub>
                            <SpaceBox height={8}/>
                            <TextField 
                                rows={20} 
                                onChange={(event)=>{setAns(event.target.value)}}/>


                            <SpaceBox height={32}/>

                            <SecTitle>メモ</SecTitle>
                            <SecSub>補足しておきたいこと</SecSub>
                            <SpaceBox height={8}/>
                            <TextField 
                                rows={8}
                                onChange={(event)=>{setMemo(event.target.value)}}/>
                        <SpaceBox height={16}/>
                    </Column>
                </Card>
                <PostBtn onClick={onSubmit}>投稿する</PostBtn>
                <SpaceBox height={32}/>
            </Column>
        </Back>
    );
}

export default PostPage;