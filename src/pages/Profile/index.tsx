import { Text, View } from 'react-native';

import Page from '../../components/Page';
import Header from '../../components/Header';
import { Title, Container, StyledText } from './styles';
import Button from '../../components/Button';
import { useAuthContext } from '../../contexts/AuthContext';

export default function Profile() {
    const { user, signOutUser } = useAuthContext();

	return (
		<Page>
			<Header title='Perfil' />
			<Container>
				<View>
					<Title>Bem vindo de volta,</Title>
					<StyledText>{user.name}</StyledText>
				</View>

                <Button
                    title='Sair'
                    variant='outlined'
                    onPress={() => signOutUser()}
                />
			</Container>
		</Page>
	);
}
