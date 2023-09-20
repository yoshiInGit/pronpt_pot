import styled from "styled-components";
import SpaceBox from "../layout/SpaceBox";
import Card from "../basic/Card";
import GrowSpace from "../layout/GrowSpace";
import Icon from "../basic/Icon";
import Column from "../layout/Column";
import Row from "../layout/Row";


const PromptCard = () => {
    const Head = () => {

        const Wrapper = styled.div`
            width       : 100%;
            display     : flex;
            align-items : center;
            gap         : 12px;
        `
        const User = styled.span`
            color: #333333;
            text-decoration: underline;
        `
        return(
            <Wrapper>
                <User>user</User>
                <GrowSpace/>
                <Icon name="link"/>
                <Icon name="content_copy"/>
            </Wrapper>
        );
    }

    const Title = styled.div`
        width        : 100%;
        display      : flex;
        align-items  : center;
        height       : 40px;
        font-weight  : bold;
        color        : #333333;
        font-family  : 'Kosugi Maru', sans-serif;
    `

    const Prompt = styled.div`
        color: #686868;
        font-size: 8px;
    `

    const Msg = styled.div`
        color: black;
        font-size: 12px;
    `

    const Footer = () => {
        const Wrapper = styled.div`
            width: 100%;
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

        return(
            <Wrapper>
                <Row center>
                    <Icon color="#FF004D" name="bookmark_border"/>
                    <BookNum>77</BookNum>

                    <SpaceBox width={8}/>

                    <AIName>ChatGPT</AIName>

                    <GrowSpace/>
                </Row>
            </Wrapper>
        );
    }

    return(
        <Card>
            <Column
                center
                padding={28}>
                    <SpaceBox height={16}/>

                    <Head/>

                    <Title>企画書テンプレ</Title>

                    <Prompt>あなた、会社の社員です。以下の要件を満たすような企画書を書きなさい。1．あああああああ2．いいいいいいい３．うううううう</Prompt>

                    <SpaceBox height={16}/>

                    <Msg>
                        Ex
                        <br></br>
                        書のテンプレートです。企画書を作成する際に参考にしてください。[企画書のタイトル]概要プロジェクトの名前:提案者の名前/組織名:提案日概要プロジェクトの名前:提案者の名前/組織名:提案日…
                    </Msg>

                    <SpaceBox height={28}/>

                    <Footer/>

                    <SpaceBox height={12}/>

            </Column>

        </Card>
    );

    // return (
    //     <>
    //     <Card>
    //         <Head>
    //             <SpaceBox width={8}/>
    //             <User>user</User>
    //             <Space/>
    //             <ActionBtn>X</ActionBtn>
    //             <ActionBtn className="material-icons">link</ActionBtn>
    //             <ActionBtn className="material-icons">content_copy</ActionBtn>
    //             <SpaceBox width={8}/>
    //         </Head>

    //         <Title>企画書テンプレ</Title>

    //         <Prompt>あなた、会社の社員です。以下の要件を満たすような企画書を書きなさい。1．あああああああ2．いいいいいいい３．うううううう</Prompt>
        
    //         <SpaceBox height={28}/>

    //         <Msg>
    //             Ex
    //             <br></br>
    //             書のテンプレートです。企画書を作成する際に参考にしてください。[企画書のタイトル]概要プロジェクトの名前:提案者の名前/組織名:提案日概要プロジェクトの名前:提案者の名前/組織名:提案日…
    //         </Msg>

    //         <SpaceBox height={12}/>

    //         <Footer>
    //             <SpaceBox width={12}/>
    //             <Book className="material-icons">bookmark_border</Book>
    //             <BookNum>77</BookNum>
    //             <SpaceBox width={8}/>
    //             <AIName>ChatGPT</AIName>
    //         </Footer>

    //         <SpaceBox height={8}/>
    //     </Card>
    //     </>
    // );
}

export default PromptCard;