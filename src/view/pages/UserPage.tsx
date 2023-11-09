import { Link } from "react-router-dom";
import Back from "../components/basic/Back"
import Card from "../components/basic/Card";
import Typo from "../components/basic/Typo";
import Center from "../components/layout/Center";
import Column from "../components/layout/Column";
import ResponsiveWidth from "../components/layout/ResponsiveWidth";
import Row from "../components/layout/Row";
import SpaceBox from "../components/layout/SpaceBox";
import Header from "../components/module/Header"
import Mode from "../../domain/mode";
import PromptCard from "../components/module/PromptCard";
import { usePromptsByMode } from "../../hooks/usePromptByMode";
import GrowSpace from "../components/layout/GrowSpace";
import Icon from "../components/basic/Icon";

const UserPage = () => {
    const { prompts, isLoading, error} = usePromptsByMode({mode : Mode.Hot});
    let promptCardList : JSX.Element[] = [];
    if(isLoading){
        // promptCardList =  [(<Typo size={24}>Loading...</Typo>)];
    }
    if(error){
        // promptCardList =  [(<Typo size={24}> Error: {error}</Typo>)];
    }
    if(prompts != null){
        for(let prompt of prompts){
            promptCardList.push(
                <PromptCard prompt={prompt}/>
            )
        }
    }

    return(
        <Back>
            <Header home/>

            <Column center>
                <ResponsiveWidth>
                    <SpaceBox height={116}/>

                    <Card>
                        <Column padding={16}>
                            <SpaceBox height={24}/>
                            <Row>
                                <GrowSpace/>
                                <Icon name="bookmark" color="#FF004D"/>
                            </Row>
                            <Center>
                                <Typo size={24}>User 1</Typo>
                            </Center>

                            <Typo size={14} color="#4e4e4e">Contact:</Typo>
                            <Center>
                                <Row gap={16}>
                                    <Column>
                                        <Typo size={14}>E-mail</Typo>
                                        <Typo size={14}>Twitter</Typo>
                                    </Column>

                                    <Column>
                                        <Typo size={14}>:</Typo>
                                        <Typo size={14}>:</Typo>
                                    </Column>

                                    <Column>
                                        <Typo size={14}><Link to={""}>user@email.com</Link></Typo>
                                        <Typo size={14}><Link to={""}>user1_twitter</Link></Typo>
                                    </Column>
                                </Row>
                            </Center>

                            <SpaceBox height={22}/>

                            <Typo size={14} color="#4e4e4e">Profile:</Typo>  
                            <SpaceBox height={16}/>
                            <Typo size={14} lineBreak>
                                {` こんにちは！私はケイトリン・スミスと申します。
                                    アートと音楽が大好きなロンドン在住のデザイナーです。
                                    日々の生活からインスピレーションを得て、色彩豊かなデザインとメロディアスな音楽を創造することに情熱を注いでいます。
                                    コーヒーや散歩が好きで、クリエイティブなアイデアを思いつくためによく近所のカフェで時間を過ごしています。
                                    新しい挑戦を楽しみながら、常に自己成長を目指しています。お気軽にメッセージをお送りください！`}
                            </Typo>    

                        <SpaceBox height={52}/>
                        </Column>
                    </Card>

                    <SpaceBox height={64}/>

                    <Column gap={16}>
                        <Typo size={16}>Prompts:</Typo>
                        {promptCardList}
                    </Column>

                    <SpaceBox height={64}/>
                </ResponsiveWidth>
            </Column>
        </Back>
    )
}

export default UserPage;

