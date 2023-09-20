import styled from "styled-components";
import Header from "./components/basic/Header";
import SpaceBox from "./components/layout/SpaceBox";
import PostCard from "./components/common/PostCard";

const Back = styled.div`
        background-color: #DCDCDC;
        width: 100%;
        height: 100vh;
    `

const Body = styled.div`
    width: 100%;
    height: 100vh;
    margin-top: 56px;
    display: flex;
`
const Container = styled.div`
    flex-grow: 1;
    height: 100%;
    overflow: scroll;
    background-color: #DCDCDC;
`

const HeadSec = styled.div`
    background-color: white;
    width: 100%;
    height: 74px;
    border-top: 16px solid #FF008A;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:4px;
    filter: drop-shadow(0px 5px 2px rgba(0, 0, 0, 0.41));
`

const HeadTitle = styled.div`
    font-size: 20px;
    font-weight: 500;
    font-family: 'Kosugi Maru', sans-serif;
    margin-left: 16px;
`

const HeadSub = styled.div`
    font-size: 10px;
    color: #6a6a6a;
    font-family: 'Kosugi Maru', sans-serif;
    margin-left: 16px;
`

const PostBtn = styled.div`
    width: 100%;
    height: 48px;
    background-color: #FF008A;
    color: white;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0px 5px 2px rgba(0, 0, 0, 0.41));
    font-family: 'Kosugi Maru', sans-serif;
    font-size: 20px;
`

const PostPage = () => {
    return(
        <>
            <Back>
                <Header home/>
                <Body>
                    <SpaceBox width={16}/>
                    <Container>
                        <SpaceBox height={16}/>
                        <HeadSec>
                            <HeadTitle>プロンプトを投稿する</HeadTitle>
                            <HeadSub>見つけたプロンプトを投稿して共有しよう</HeadSub>
                        </HeadSec>

                        <SpaceBox height={12}/>

                        <PostCard 
                            step={1} 
                            title="利用した生成AIを選択する"
                            list/>
                        <SpaceBox height={12}/>

                        <PostCard 
                            step={2}
                            title="タイトルを入力する"
                            subTitle="プロンプトの内容を一言で"
                            textField
                            line/>
                        <SpaceBox height={12}/>

                        <PostCard 
                            step={3}
                            title="キーワードを指定する(最大15個)"
                            subTitle="プロンプトの内容を表すキーワードを指定する。カンマ、スペースいずれかで区切る"
                            textField/>
                        <SpaceBox height={12}/>

                        <PostCard 
                            step={4}
                            title="プロンプトを入力する"
                            subTitle="AIに入力した内容を書く"
                            textField/>
                        <SpaceBox height={12}/>

                        <PostCard 
                            step={5}
                            title="回答を入力する"
                            subTitle="返ってきた返答の内容を書く"
                            textField/>
                        <SpaceBox height={12}/>

                        <PostCard 
                            step={6}
                            title="その他"
                            subTitle="補足など、残しておきたいメモをあれば書いておく"
                            textField/>
                        <SpaceBox height={12}/>

                        <PostBtn>投稿する</PostBtn>

                        <SpaceBox height={48}/>

                    </Container>
                    <SpaceBox width={16}/>
                </Body>
            </Back>
        </>       
    );
}

export default PostPage;