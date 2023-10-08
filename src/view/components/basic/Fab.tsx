import { ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 72px;
    height: 72px;
    border-radius: 50%;
    background-color: #FF008A;
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.41));
`

type props  = {
    children : ReactNode,
}

const Fab = ({children} : props) => {
    

    return(
        <>
            <Wrapper>
                {children}
            </Wrapper>
        </>
    );
}

export default Fab;
