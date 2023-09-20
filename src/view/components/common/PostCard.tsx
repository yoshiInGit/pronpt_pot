import styled from "styled-components";
import SpaceBox from "../layout/SpaceBox";
import { useRef } from "react";
import Card from "../basic/Card";
import Column from "../layout/Column";


type props = {
    step : number,
    title? : string,
    subTitles? : string[],
    list?: boolean,
    option? : string[],
    textField? :boolean,
    line?: boolean,
}

const PostCard = ({step, title="", subTitles=[], list, option, textField, line} : props) => {
    

    const Step = styled.div`
        color: #F50043;
        font-size: 14px;
    `

    const Title = styled.div`
        font-size: 16px;
    `

    const SubTitles = ({subTitles} : {subTitles : string[]}) => {
        
        const SubTitle = styled.div`
            font-size: 12px;
            color: #212121;
        `

        const res = [];
        for(var subTitle of subTitles){
            res.push(<SubTitle>{subTitle}</SubTitle>)
        }

        return(
            <>
            {res}
            </>
        );
    }

    const DropDownList = ({listItems = []} : {listItems?: string[]}) => {
        const DropDownWrapper = styled.select`
            appearance       : none;
            width            : 180px;
            height           : 40px;
            padding          : .4em calc(.8em + 30px) .4em .8em;
            border           : 1px solid #cccccc;
            border-radius    : 3px;
            background-color : #fff;
            color            : #9e9e9e;
            font-size        : 1em;
            cursor           : pointer;   
        `

        const DropDownItem = styled.option`
        `

        const items = [];
        for(let listItem of listItems){
            items.push(<DropDownItem>{listItem}</DropDownItem>)
        }


        return(
            <DropDownWrapper>
                {items}
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
        <Card>
            <Column padding={16}>
                <SpaceBox height={16}/>

                    <Step>STEP.{step}</Step>

                    <Title>{title}</Title>

                    <SubTitles subTitles={subTitles}/>

                    <SpaceBox height={32}/>

                    {input}

                <SpaceBox height={16}/>
            </Column>
        </Card>
    )
}

export default PostCard