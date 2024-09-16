import { StatusBar, Image, Platform } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { Form, Container } from './styles';
import { LoginStackParams } from '../../types/types';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Page from '../../components/Page';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigation = useNavigation<NavigationProp<LoginStackParams>>();

	return (
		<Page>
			<StatusBar backgroundColor='#F0F4FF' barStyle='dark-content' />

			<Container behavior={Platform.OS === 'ios' ? 'padding' : null} enabled>
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
	
					<Button title='Acessar' />
	
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
