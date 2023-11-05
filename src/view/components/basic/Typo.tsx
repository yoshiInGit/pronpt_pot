import { ReactNode } from "react";
import styled from "styled-components";

const Text = styled.span<{size : number, color : string | undefined, linebreak : boolean | undefined, fontWeight : string | undefined}>`
    font-family  : 'Kosugi Maru', sans-serif;

    ${(props)=> props.color && `color: ${props.color};`}
    ${(props)=> props.linebreak && `white-space: pre-line;`}
    ${(props)=> props.fontWeight && `font-weight: ${props.fontWeight};`}

    font-size: ${(props)=>`${props.size}px`};
`

const Typo = ({size, color, children, lineBreak, fontWeight} : {size : number, color? : string, children?: ReactNode; lineBreak? : boolean, fontWeight? : string}) => {
    return (
        <Text size={size} color={color} linebreak={lineBreak} fontWeight={fontWeight}>
            {children}
        </Text>
    )
}

export default Typo;