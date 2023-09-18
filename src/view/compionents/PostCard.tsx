import styled from "styled-components";
import SpaceBox from "./SpaceBox";
import { useRef } from "react";

const Card = styled.div`
    width: 100%;
    border-radius: 4px;
    background-color: white;
    filter: drop-shadow(0px 5px 2px rgba(0, 0, 0, 0.41));
    display: flex;
`

const Body = styled.div`
    flex-grow: 1;
    height: 100%;
    font-family: 'Kosugi Maru', sans-serif;
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const Step = styled.div`
    color: #F50043;
    font-size: 14px;
`

const Title = styled.div`
    font-size: 16px;
`

const SubTitle = styled.div`
    font-size: 12px;
    color: #212121;
`

const DropDownWrapper = styled.select`
    appearance: none;
    width: 180px;
    height: 40px;
    padding: .4em calc(.8em + 30px) .4em .8em;
    border: 1px solid #cccccc;
    border-radius: 3px;
    background-color: #fff;
    color: #9e9e9e;
    font-size: 1em;
    cursor: pointer;   
`

const DropDownItem = styled.option`
`

const DropDownList = () => {
    return(
        <DropDownWrapper>
            <DropDownItem>ChatGPT</DropDownItem>
            <DropDownItem>Bing</DropDownItem>
            <DropDownItem>BARD</DropDownItem>
            <DropDownItem>その他</DropDownItem>
        </DropDownWrapper>
    );
}

const TextField = styled.textarea`
    width: 100%;
    border: none;
    border-bottom: 1px solid #A4A4A4;
    font-size: 18px;
    resize: none;

    &:focus{
        outline: none;
    }
`


type props = {
    step : number,
    title? : string,
    subTitle? : string,
    list?: boolean,
    option? : string[],
    textField? :boolean,
    line?: boolean,
}

const PostCard = ({step, title="", subTitle="", list, option, textField, line} : props) => {
    const textFieldRef = useRef<HTMLTextAreaElement>(null);
    const onInput = ()=>{
        if (line) return;
        if (!textFieldRef.current) return;

        textFieldRef.current.style.height = 'auto';
        textFieldRef.current.style.height = (textFieldRef.current.scrollHeight) + 'px';
    };

    const input = [];
    if(list===true){
        input.push(<DropDownList/>);
    }

    if(textField===true){
        input.push(<TextField onInput={onInput} ref={textFieldRef} rows={1}/>);
    }

    return(
        <>
            <Card>
                <SpaceBox width={16}/>
                <Body>
                    <SpaceBox height={12}/>
                    <Step>STEP.{step}</Step>
                    <Title>{title}</Title>
                    <SubTitle>{subTitle}</SubTitle>

                    <SpaceBox height={16}/>

                    {input}
                    <SpaceBox height={12}/>
                </Body>
                <SpaceBox width={16}/>
            </Card>
        </>
    );
}

export default PostCard