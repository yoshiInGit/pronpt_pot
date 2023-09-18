import styled from "styled-components";
import Header from "./compionents/Header";
import SpaceBox from "./compionents/SpaceBox";
import GrowSpace from "./compionents/GrowSpace";
import Fab from "./compionents/fab";

const Back = styled.div`
        background-color: #DCDCDC;
        width: 100%;
        height: 100vh;
    `

const Body = styled.div`
    padding-top: 72px;
    display: flex;
`

const Content = styled.div`
    flex-grow: 1;
`

const ActionBtn = styled.span`
    font-size: 24px;
`

const BookWrapper = styled.div<{isActive : boolean}>`
    display: flex;
    align-items: center;
    ${(props) => props.isActive && `color: red;`};
`
const BookIcon = styled.div`
    font-size: 24px;
`

const SubTitle = styled.div`
    font-size: 16px;
    color: #4f4f4f;
    font-family: 'Kosugi Maru', sans-serif;
`

const CopySheetWrapper = styled.div`
    background-color: #DCDCDC;
    border-radius: 4px;
    width: 100%;
`

const Copy = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
`

const CopySheetContent = styled.div`
    font-size: 14px;
    font-family: 'Kosugi Maru', sans-serif;
    padding: 4px;
`

const CopySheet = () => {
    return(
        <CopySheetWrapper>
            <SpaceBox height={8}/>

            <Copy>
                <ActionBtn className="material-icons">content_copy</ActionBtn>
                <SpaceBox width={8}/>
            </Copy>

            <CopySheetContent>
                企画書のテンプレを書いて
            </CopySheetContent>

            <SpaceBox height={20}/>
        </CopySheetWrapper>
    );
}

const Book = () => {
    return(
        <BookWrapper isActive={true}>
            <BookIcon className="material-icons">bookmark_border</BookIcon>
            77
        </BookWrapper>
    );
}

const AIName = styled.div`
    width: 64px;
    height: 20px;
    background-color: #0AA924;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    color: white;
    font-size: 12px;
`

// Card-------
const Card = styled.div`
    background-color: white;
    border-radius: 3px;
    display: flex;
`

const CardContent = styled.div`
    flex-grow: 1;
`

const CardHead = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap:8px;
`

const User = styled.span`
    color : #333333;
    font-size: 16px;
    text-decoration: underline;
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

//----------Card

const PromptPage = () => {
    return(
        <>
            <Back>
                <Header home/>

                <Body>
                    <SpaceBox width={16}/>
                    <Content>
                        <Card>
                                <SpaceBox width={8}/>
                                <CardContent>
                                    <SpaceBox height={8}/>

                                    <CardHead>
                                        <User>user</User>
                                        <GrowSpace/>                
                                        <ActionBtn className="material-icons">link</ActionBtn>
                                        <Book/>
                                    </CardHead>

                                    <SpaceBox height={16}/>

                                    <AIName>ChatGPT</AIName>
                                    
                                    <SpaceBox height={12}/>

                                    <Title>企画書テンプレ</Title>

                                    <SpaceBox height={8}/>

                                    <Tags>#企画書 #テンプレ #ChatGPT</Tags>

                                    <SpaceBox height={32}/>

                                    <SubTitle>プロンプト</SubTitle>

                                    <SpaceBox height={8}/>

                                    <CopySheet></CopySheet>

                                    <SpaceBox height={32}/>

                                    <SubTitle>返答</SubTitle>

                                    <SpaceBox height={8}/>

                                    <CopySheet></CopySheet>

                                    
                                    <SpaceBox height={32}/>

                                    <SubTitle>メモ</SubTitle>

                                    <SpaceBox height={8}/>  
                                </CardContent>
                                <SpaceBox width={8}/>
                        </Card>
                    </Content>
                    <SpaceBox width={16}/>
                </Body>

                <Fab/>
            </Back>
        </>
    );
}

export default PromptPage;