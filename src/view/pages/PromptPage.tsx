import Header from "../components/module/Header";
import Back from "../components/basic/Back";
import Column from "../components/layout/Column";
import Card from "../components/basic/Card";
import SpaceBox from "../components/layout/SpaceBox";
import Row from "../components/layout/Row";
import GrowSpace from "../components/layout/GrowSpace";
import Icon from "../components/basic/Icon";
import Typo from "../components/basic/Typo";
import Fab from "../components/module/Fab";
import ResponsiveWidth from "../components/layout/ResponsiveWidth";
import User from "../components/module/User";
import AITag from "../components/module/AITag";
import ChatMsg from "../components/module/ChatMsg";

const PromptPage = () => {

    return(
        <Back>
            <Header home/>

            <Column center padding={16}>
                <SpaceBox height={80}/>
                <ResponsiveWidth>
                    <Card>
                        <Column padding={16} gap={8}>
                            <SpaceBox height={16}/>
                            <Row center>
                                <User>user</User>
                                <GrowSpace/>
                                <Icon name="link"/>
                                <SpaceBox width={16}/>
                                <Icon 
                                    clickable
                                    color="#ff4980" 
                                    name={true ? "bookmark" : "bookmark_border"}/>
                                <Typo size={16} color="#FF004D">12</Typo>
                                <SpaceBox width={16}/>
                                <AITag>BARD</AITag>
                            </Row>


                            <SpaceBox height={12}/>
                            <Typo size={18} fontWeight="bold">タイトル</Typo>                            
                            <SpaceBox height={8}/>
                            
                            <Column gap={16}>
                                <ChatMsg msg="" isAI={true}/>
                            </Column>

                            <SpaceBox height={12}/>
                            
                            <Typo size={14} color="#383838">[MEMO]</Typo>
                            <Typo size={14} color="#383838">メモメモメモ</Typo>
                            <SpaceBox height={16}/>
                        </Column>
                    </Card>
                </ResponsiveWidth>

                <SpaceBox height={16}/>
            </Column>

            <Fab>
                X
            </Fab>

        </Back>
    )
}

export default PromptPage;