import styled from "styled-components";
import SpaceBox from "./SpaceBox";

const Wrapper = styled.div<{isShadow : boolean}>`
    z-index: 100;
    position: fixed;
    top: 0;
    background-color: white;
    width  : 100%;
    height : 56px;
    display: flex;
    align-items: center;
    gap: 8px;
    ${(props) => props.isShadow && `filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.41));`};
` 
const HomeBtn = styled.span`
    font-size: 28px;
`
const Title = styled.span`
    letter-spacing: 2px;
    font-family: 'Roboto', sans-serif;
    font-weight: bolder;
`

const PostBtn = styled.div`
    width  : 68px;
    height : 32px;
    background-color: #FF008A;
    color: white;
    border-radius: 3px;
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.41));

    display: flex;
    align-items: center;
    justify-content: center;
`
const Space = styled.div`
    flex-grow: 1;
`
const Header = ({isShadow = true} : {isShadow? : boolean}) => {
    return(
        <>
            <Wrapper isShadow={isShadow}>
                <SpaceBox width={8}/>
                <HomeBtn className="material-icons">menu</HomeBtn>
                <Title>Prompt Pot</Title>
                <Space/>
                <PostBtn>投稿</PostBtn>
                <SpaceBox width={8}/>
            </Wrapper>
        </>
    );

}

export default Header