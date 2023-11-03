import styled from "styled-components";

const ResponsiveWidth = styled.div`
    width: 100%;

    @media (min-width: 768px) {
        width: 600px;
    }

    @media (min-width: 1024px) {
        width: 680px;
    }
`

export default ResponsiveWidth;