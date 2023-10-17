import styled from "styled-components";

const IconWrapper = styled.span<{size : number, color : string | undefined, clickable : boolean}>`
    ${(props)=> props.color && `color: ${props.color};`}
    font-size: ${(props)=>`${props.size}px`};
    ${(props)=> props.clickable && `cursor: pointer;`}
`

type props = {
    name   : string,
    size?  : number,
    color? : string,
    clickable? : boolean,
}
const Icon = ({name, size=24, color, clickable} : props) => {
    
    return(
        <IconWrapper size={size} color={color} className="material-icons" clickable={clickable==true}>
            {name}
        </IconWrapper>
    );
}

export default Icon;