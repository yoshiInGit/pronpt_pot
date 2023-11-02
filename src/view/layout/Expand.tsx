import styled from "styled-components";
import { ReactNode } from "react";


type props = {
    column?  : boolean,
    row?     : boolean,
    children : ReactNode
}

const Expand = ({column=false, row=false, children} : props) => {
    const Wrapper = styled.div<{column :boolean, row : boolean}>`
        ${(props) => props.column && `height: 100%;` }
        ${(props) => props.row && `width: 100%;` }
    `

    return(
        <Wrapper column={column} row={row}>
            {children}
        </Wrapper>
    )
}

export default Expand;