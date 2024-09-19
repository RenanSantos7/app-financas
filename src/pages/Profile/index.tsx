import { Text, View } from 'react-native';

import Page from '../../components/Page';
import Header from '../../components/Header';

export default function Profile() {
    return (
        <Page>
            <Header title='Perfil' />
            <Text>Profile</Text>
        </Page>
    );
};