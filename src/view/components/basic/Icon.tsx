import styled from "styled-components";

type props = {
    name   : string,
    size?  : number,
    color? : string,
}
const Icon = ({name, size=24, color} : props) => {
    const Icon = styled.span<{size : number, color : string | undefined}>`
        ${(props)=> props.color && `color: ${props.color};`}
        font-size: ${(props)=>`${props.size}px`};
    `

    return(
        <Icon size={size} color={color} className="material-icons">
            {name}
        </Icon>
    );
}

export default Icon;