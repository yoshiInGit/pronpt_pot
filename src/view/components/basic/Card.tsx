import { ReactNode } from "react";
import styled from "styled-components";

type props = {
    children : ReactNode
}

const Card = ({children} : props) => {
    const Wrapper = styled.div`
        width            : 100%;
        background-color : white;
        border-radius    : 4px;
        filter           : drop-shadow(0px 5px 2px rgba(0, 0, 0, 0.41));
    `
    
    return(
        <Wrapper>
            {children}
        </Wrapper>
    );
}

export default Card;