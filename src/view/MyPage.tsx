import styled from "styled-components";
import Header from "./compionents/Header";
import SpaceBox from "./compionents/SpaceBox";

const MyPage = () => {
    const Back = styled.div`
        width: 100%;
        height : 100vh;
    `

    const Body = styled.div`
        padding-top: 56px;
        display: flex;
    `

    const Content = styled.div`
        flex-grow: 1;
    `

    const Card = styled.div`
        width: 100%;
        background-color: white;
        border-radius: 3px;
    `
    const UserName = styled.div`
        height: 56px;
        color: #4e4e4e;
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    `

    const UserInfo = styled.div`

    `

    return(
        <>
            <Back>
                <Header home/>
                
                <Body>
                    <SpaceBox width={16}/>
                    <Content>
                        <Card>
                            <SpaceBox height={32}/>
                            <UserName>user</UserName>
                            <SpaceBox height={32}/>
                            <UserInfo>
                                Twitter : 
                                <br></br>
                                Twitter : 
                            </UserInfo>
                        </Card>

                        <SpaceBox height={32}/>

                        <Card>
                            
                        </Card>
                    </Content>
                    <SpaceBox width={16}/>
                </Body>
            </Back>
        </>
    );
}

export default MyPage;