import styled from "styled-components";
import SpaceBox from "./SpaceBox";
import { ReactNode } from "react";

const Wrapper = styled.div<{color : string | undefined}>`
    ${(props)=> props.color && `background-color: ${props.color};`}
    display: flex;
`

const Content = styled.div<{gap : number, center : boolean}>`
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    gap: ${(props) => `${props.gap}px`};
    ${(props)=> props.center && `align-items: center;`}
`

type props = {
    padding? : number,
    center?  : boolean,
    gap?     : number, 
    color?   : string
    children?: ReactNode;
}

const Column = ({padding = 0, center = false, gap = 0, children, color} : props) => {
    

    return(
        <Wrapper color={color}>
            <SpaceBox width={padding}/>
            <Content gap={gap} center={center}>
                {children}
            </Content>
            <SpaceBox width={padding}/>
        </Wrapper>
    );
}

export default Column;