import styled from "styled-components";
import Header from "./components/basic/Header";
import SpaceBox from "./components/layout/SpaceBox";
import GrowSpace from "./components/layout/GrowSpace";
import Back from "./components/basic/Back";
import Column from "./components/layout/Column";
import Row from "./components/layout/Row";
import Icon from "./components/basic/Icon";
import Card from "./components/basic/Card";
import Expand from "./components/layout/Expand";
import { useState } from "react";
import { usePromptById } from "../usecase/prompt_use_case";

const PromptPage = () => {

    const [promptId, setPromptId] = useState("");
    const {prompt, isLoading, error}     = usePromptById({id : promptId});

    const Wrapper = styled.div`
        width: 100%;
    `

    const CardHead = () => {
        const User = styled.span`
            color : #333333;
            font-size: 16px;
            text-decoration: underline;
        `

        const Active = styled.div<{isActive : boolean}>`
            ${(props)=> props.isActive && 'color : #FF004D;'}
            display: flex;
            align-items: center;
        `

        return(
            <Wrapper>
                <Row>
                    <User>user</User>
                    <GrowSpace/>
                    <Icon name="link"/>
                    <Active isActive>
                    <SpaceBox width={8}/>
                        <Icon name="bookmark_border"/>
                        {prompt.book}
                    </Active>
                </Row>
            </Wrapper>
        )
    }

    const AIName = styled.div`
        width            : 64px;
        height           : 20px;
        background-color : #0AA924;
        display          : flex;
        align-items      : center;
        justify-content  : center;
        border-radius    : 3px;
        color            : white;
        font-size        : 12px;
    `

    const Title = styled.div`
        font-size: 24px;
        font-weight: bold;
        color: #333333;
        font-family: 'Kosugi Maru', sans-serif;
    `
    const Tags = styled.div`
        font-size: 12px;
        font-family: 'Kosugi Maru', sans-serif;
        color: #565656;
    `

    const SubTitle = styled.div`
        font-size: 16px;
        color: #4f4f4f;
        font-family: 'Kosugi Maru', sans-serif;
    `

    type copySheetProps = {
        content? : string,
    }
    const CopySheet = ({content} : copySheetProps) => {
        const CopySheetWrapper = styled.div`
            background-color: #DCDCDC;
            border-radius: 4px;
            width: 100%;
        `

        const CopySheetContent = styled.div`
            font-size: 14px;
            font-family: 'Kosugi Maru', sans-serif;
            padding: 4px;
        `

        return(
            <CopySheetWrapper>
                <SpaceBox height={8}/>
    
                <Expand row>
                    <Row>
                        <GrowSpace/>
                        <Icon name="content_copy"/>
                        <SpaceBox width={16}/>
                    </Row>
                </Expand>
                
                <SpaceBox height={8}/>

                <CopySheetContent>
                    <Column padding={8}>
                    {content}
                    </Column>
                </CopySheetContent>
    
                <SpaceBox height={20}/>
            </CopySheetWrapper>
        );
    }

    return(
        <Back>
            <Header home/>

            <Column
                center
                padding={24}>
                    <SpaceBox height={72}/>

                    <Card>
                        <Column
                            center 
                            padding={16}>
                            
                            <SpaceBox height={16}/>

                            <CardHead/>

                            <SpaceBox height={16}/>

                            <Expand row>
                                <AIName>{prompt.aiName}</AIName>
                            </Expand>

                            <SpaceBox height={12}/>

                            <Expand row>
                                <Title>{prompt.title}</Title>
                            </Expand>


                            <SpaceBox height={8}/>

                            <Expand row>
                                <Tags>#企画書 #テンプレ #ChatGPT</Tags>
                            </Expand>

                            <SpaceBox height={32}/>

                            <Expand row>
                                <SubTitle>プロンプト</SubTitle>
                            </Expand>

                            <SpaceBox height={8}/>

                            <CopySheet
                                content={prompt.prompt}
                            />

                            <SpaceBox height={32}/>

                            <Expand row>
                                <SubTitle>返答</SubTitle>
                            </Expand>

                            <SpaceBox height={8}/>

                            <CopySheet
                                content={prompt.ans}
                            />

                            <SpaceBox height={32}/>

                            <Expand row>
                                <SubTitle>メモ</SubTitle>
                            </Expand>

                            <SpaceBox height={32}/>

                        </Column>
                    </Card>
            </Column>
        </Back>
    )
}

export default PromptPage;