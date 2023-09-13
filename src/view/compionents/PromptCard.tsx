import styled from "styled-components";
import SpaceBox from "./SpaceBox";

const Card = styled.div`
    border-radius: 3px;
    width: 100%;
    background-color: white;
    filter: drop-shadow(0px 5px 2px rgba(0, 0, 0, 0.41));

    font-family: 'Lacquer', cursive;
    font-family: 'Press Start 2P', cursive;
    font-family: 'Roboto', sans-serif;
`

// Header ---
const Head = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
`
const User = styled.span`
    color: #333333;
    text-decoration: underline;
`

const Space = styled.div`
    flex-grow: 1;
`

const ActionBtn = styled.span`
    font-size: 24px;
`
// ---- Header

const Title = styled.div`
    display: flex;
    align-items: center;
    padding-left: 16px;
    height: 40px;
    font-weight: bold;
    color: #333333;
    font-family: 'Kosugi Maru', sans-serif;
`

const Prompt = styled.div`
    padding-left: 16px;
    padding-right: 16px;
    color: #686868;
    font-size: 8px;
`

const Msg = styled.div`
    padding-left: 16px;
    padding-right: 16px;
    color: balck;
    font-size: 12px;
`

// Footer--------
const Book = styled.span`
    font-size: 24px;
    color : #FF004D;
`

const BookNum = styled.span`
    font-size: 16px;
    color : #FF004D;
    font-weight: 600;
`

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

const Footer = styled.div`
    width: 100%;
    display: flex;
    gap: 4px;
    align-items: center;
`
// ------Footer

const PromptCard = () => {
    return (
        <>
        <Card>
            <Head>
                <SpaceBox width={8}/>
                <User>user</User>
                <Space/>
                <ActionBtn>X</ActionBtn>
                <ActionBtn className="material-icons">link</ActionBtn>
                <ActionBtn className="material-icons">content_copy</ActionBtn>
                <SpaceBox width={8}/>
            </Head>

            <Title>企画書テンプレ</Title>

            <Prompt>あなた、会社の社員です。以下の要件を満たすような企画書を書きなさい。1．あああああああ2．いいいいいいい３．うううううう</Prompt>
        
            <SpaceBox height={28}/>

            <Msg>
                Ex
                <br></br>
                書のテンプレートです。企画書を作成する際に参考にしてください。[企画書のタイトル]概要プロジェクトの名前:提案者の名前/組織名:提案日概要プロジェクトの名前:提案者の名前/組織名:提案日…
            </Msg>

            <SpaceBox height={12}/>

            <Footer>
                <SpaceBox width={12}/>
                <Book className="material-icons">bookmark_border</Book>
                <BookNum>77</BookNum>
                <SpaceBox width={8}/>
                <AIName>ChatGPT</AIName>
            </Footer>

            <SpaceBox height={8}/>
        </Card>
        </>
    );
}

export default PromptCard;