import styled from "styled-components";

const IconWrapper = styled.span<{size : number, color : string | undefined}>`
    ${(props)=> props.color && `color: ${props.color};`}
    font-size: ${(props)=>`${props.size}px`};
`

type props = {
    name   : string,
    size?  : number,
    color? : string,
}
const Icon = ({name, size=24, color} : props) => {
    

    return(
        <IconWrapper size={size} color={color} className="material-icons">
            {name}
        </IconWrapper>
    );
}

export default Icon;