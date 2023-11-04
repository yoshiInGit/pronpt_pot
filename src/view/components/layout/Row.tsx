import styled from "styled-components";
import SpaceBox from "./SpaceBox";
import { ReactNode } from "react";


const Wrapper = styled.div`
    display: flex;
`

const Content = styled.div<{gap : number, center : boolean}>`
    flex-grow : 1;
    display   : flex;
    gap       : ${(props) => `${props.gap}px`};
    ${(props)=> props.center && `align-items: center;`}
`

type props = {
    padding? : number,
    center?  : boolean,
    gap?     : number, 
    children?: ReactNode;
}

const Row = ({padding = 0, center = false, gap = 0, children} : props) => {
    return(
        <Wrapper>
            <SpaceBox width={padding}/>
            <Content gap={gap} center={center}>
                {children}
            </Content>
            <SpaceBox width={padding}/>
        </Wrapper>
    );
}

export default Row;