import styled from "styled-components";
import SpaceBox from "../layout/SpaceBox";
import { Link } from "react-router-dom";

type props = {
    isShadow? : boolean,
    home?     : boolean,
    menu?     : boolean,
    post?     : boolean,
}

const Header = ({isShadow = true, home=false, menu=false, post=false} : props) => {
    const Wrapper = styled.div<{isShadow : boolean}>`
        z-index          : 100;
        position         : fixed;
        top              : 0;
        background-color : white;
        width            : 100%;
        height           : 56px;
        display          : flex;
        align-items      : center;
        gap              : 8px;
        ${(props) => props.isShadow && `filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.41));`};
    ` 
    const HomeBtn = styled.span`
        font-size: 28px;
    `

    const MenuBtn = styled.span`
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

    const leadings = [];
    if(menu===true){
        leadings.push(
            <MenuBtn className="material-icons">menu</MenuBtn>
        );
    }

    if(home===true){
        leadings.push(
            <Link to="/">
                <HomeBtn className="material-icons">home</HomeBtn>
            </Link>
        );
    }


    const tailings = []
    if(post===true){
        tailings.push(
            <PostBtn>投稿</PostBtn>
        )
    }


    return(
        <>
            <Wrapper isShadow={isShadow}>
                <SpaceBox width={8}/>

                {leadings}
                
                <Title>Prompt Pot</Title>
                <Space/>
                
                {tailings}
                
                <SpaceBox width={8}/>
            </Wrapper>
        </>
    );

}

export default Header