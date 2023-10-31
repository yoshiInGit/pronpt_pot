import { ReactNode } from "react";
import styled from "styled-components";

const Text = styled.span<{size : number, color : string | undefined}>`
    font-family  : 'Kosugi Maru', sans-serif;

    ${(props)=> props.color && `color: ${props.color};`}
    font-size: ${(props)=>`${props.size}px`};
`

const Typo = ({size, color, children} : {size : number, color? : string, children?: ReactNode;}) => {
    return (
        <Text size={size} color={color}>
            {children}
        </Text>
    )
}

export default Typo;