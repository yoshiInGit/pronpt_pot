import styled from "styled-components";
import Header from "./components/basic/Header";
import SpaceBox from "./components/layout/SpaceBox";
import PostCard from "./components/common/PostCard";
import Back from "./components/basic/Back";
import Column from "./components/layout/Column";
import { usePostPrompt } from "../usecase/prompt_use_case";

const PostPage = () => {
    //TODO
    // const onSubmit = () => {
    //     const { error, isLoading } = usePostPrompt();
        
    // }
    
    const HeadSec = () => {
        const Wrapper = styled.div`
            background-color : white;
            width            : 100%;
            height           : 74px;
            border-top       : 16px solid #FF008A;
            border-radius    : 4px;
            display          : flex;
            flex-direction   : column;
            justify-content  : center;
            gap              : 4px;
            filter           : drop-shadow(0px 5px 2px rgba(0, 0, 0, 0.41));
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

        
        return(
            <Wrapper>
                <HeadTitle>プロンプトを投稿する</HeadTitle>
                <HeadSub>見つけたプロンプトを投稿して共有しよう</HeadSub>
            </Wrapper>
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
        `

    return(
        <Back>
            <Header home/>

            <Column 
                padding={16}
                gap={16}>

                <SpaceBox height={72}/>

                <HeadSec/>

                <PostCard
                    step={1}
                    title="利用した生成AIを選択する"
                    list/>

                <PostCard
                    step={2}
                    title="タイトルを入力する"
                    subTitles={["プロンプトの内容を一言で"]}
                    textField
                    line/>
                
                <PostCard 
                    step={3}
                    title="キーワードを指定する(最大15個)"
                    subTitles={["プロンプトの内容を表すキーワードを指定する。","カンマ、スペースいずれかで区切る"]}
                    textField/>

                <PostCard 
                    step={4}
                    title="プロンプトを入力する"
                    subTitles={["AIに入力した内容を書く"]}
                    textField/>

                <PostCard 
                    step={5}
                    title="回答を入力する"
                    subTitles={["返ってきた返答の内容を書く"]}
                    textField/>
                
                <PostCard 
                    step={6}
                    title="その他"
                    subTitles={["補足など、残しておきたいメモをあれば書いておく"]}
                    textField/>

                <PostBtn>投稿する</PostBtn>

                <SpaceBox height={48}/>
            </Column>
        </Back>
    );
}

export default PostPage;