import styled from "styled-components";

const Wrapper = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 72px;
    height: 72px;
    border-radius: 50%;
    background-color: #FF008A;
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.41));
`

const FabIcon = styled.span`
    color: white;
    font-size: 40px;
`

const Fab = () => {
    return(
        <>
            <Wrapper>
                <FabIcon className="material-icons">search</FabIcon>
            </Wrapper>
        </>
    );
}

export default Fab;
