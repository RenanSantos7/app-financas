import { Image, Platform } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { Form, Container } from './styles';
import { LoginStackParams } from '../../types/types';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Page from '../../components/Page';
import { useAuthContext } from '../../contexts/AuthContext';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { signInUser } = useAuthContext();

	const navigation = useNavigation<NavigationProp<LoginStackParams>>();

	function handleLogin() {
		if (!!email && !!password) {
			signInUser(email, password);
		}
	}

	return (
		<Page>
			<Container
				behavior={Platform.OS === 'ios' ? 'padding' : null}
				enabled
			>
				<Image
					source={require('../../assets/Logo.png')}
					style={{ marginBottom: 60 }}
				/>

				<Form>
					<Input
						value={email}
						setValue={setEmail}
						placeholder='E-mail'
						keyboardType='email-address'
					/>

					<Input
						value={password}
						setValue={setPassword}
						placeholder='Senha'
						isPassword
					/>

					<Button title='Acessar' onPress={handleLogin} />

					<Button
						title='Criar conta gratuita'
						variant='only-text'
						onPress={() => {
							navigation.navigate('SignUp');
						}}
					/>
				</Form>
			</Container>
		</Page>
	);
}
