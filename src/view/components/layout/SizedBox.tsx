import { ReactNode } from "react";
import styled from "styled-components"

const Box = styled.div<{width : Number | undefined, height : Number | undefined}>`
        ${(props) => props.width  && `width: ${props.width}px;` }
        ${(props) => props.height && `height: ${props.height}px;` }
`

const SizedBox = ({width , height, children} : {width? : Number, height? : Number, children?: ReactNode}) => {
    return(
        <Box width={width} height={height}>
            {children}
        </Box>
    );
}

export default SizedBox;