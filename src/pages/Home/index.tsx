import { Text, StatusBar } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome6';

import Page from '../../components/Page';
import { Container, Topbar, TopbarTxt } from './styles';
import Cards from './components/Cards';

interface HomeProps {
    
};

export default function Home(props: HomeProps) {
    return (
        <Page>
            <StatusBar backgroundColor='#F0F4FF' barStyle='dark-content' />
            <Container>
                <Topbar>
                    <FontAwesomeIcon
                        name='bars'
                        size={22}
                    />
                    <TopbarTxt>Minhas movimentações</TopbarTxt>

                </Topbar>
                
                <Cards />
            </Container>
        </Page>
    );
};