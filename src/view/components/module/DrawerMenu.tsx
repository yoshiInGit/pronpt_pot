import styled from "styled-components";
import Column from "../layout/Column";
import Row from "../layout/Row";
import GrowSpace from "../layout/GrowSpace";
import Icon from "../basic/Icon";
import SpaceBox from "../layout/SpaceBox";
import Typo from "../basic/Typo";
import Clickable from "../basic/Clickable";

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;

    background-color: #00000091;

    z-index: 900;
`

const Content = styled.div`
    top              : 0;
    left             : 0;
    height           : 100%;
    background-color : white;
    filter           : drop-shadow(0px 5px 2px rgba(0, 0, 0, 0.41));
    width            : 80%;

    
    @media (min-width: 768px) {
        width: 40%;
    }

    @media (min-width: 1024px) {
        width: 20%;
    }

`

const DrawerMenu = ({onClose} : {onClose : ()=>void}) => {
    return(
        <Wrapper>
            <Content>
                <Column padding={16}>
                    <SpaceBox height={8}/>
                    <Row>
                        <GrowSpace/>
                        <Clickable onClick={onClose}>
                            <Icon name="close"/>
                        </Clickable>
                    </Row>
                    <SpaceBox height={52}/>
                    <Clickable>
                        <Typo size={20}>My Page</Typo>
                    </Clickable>
                </Column>
            </Content>
        </Wrapper>
    );
}

export default DrawerMenu;