import styled from "styled-components";
import Header from "../components/module/Header";
import SpaceBox from "../components/layout/SpaceBox";
import Column from "../components/layout/Column";
import Back from "../components/basic/Back";
import Card from "../components/basic/Card";

const MyPage = () => {
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
        <Back>
            <Header home/>

            <Column padding={16}>
                <SpaceBox height={72}/>

                <Card>
                    <Column padding={16}>
                        <UserName>user</UserName>

                        <SpaceBox height={32}/>

                        <UserInfo>
                             Twitter : 
                             <br></br>
                             Twitter : 
                        </UserInfo>

                        <SpaceBox height={16}/>
                    </Column>
                </Card>

            </Column>
        </Back>

    );
}

export default MyPage;