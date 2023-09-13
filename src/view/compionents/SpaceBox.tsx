import styled from "styled-components";

const Box = styled.div<{width : Number, height : Number}>`
    width  : ${(props) => `${props.width}px`};
    height : ${(props) => `${props.height}px`};
`

const SpaceBox = ({width=0 , height=0}:{width? : Number, height? : Number}) => {
    return(
        <Box width={width} height={height}/>
    );
}

export default SpaceBox;