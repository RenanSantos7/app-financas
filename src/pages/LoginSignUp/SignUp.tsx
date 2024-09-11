import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { useState } from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome6';

import { BtBack, BtBackTxt, Container, Form } from './styles';
import { LoginStackParams } from '../../types/types';
import Page from './Base';
import Button from '../../components/Button';
import Input from '../../components/Input';

export default function SignUp() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigation = useNavigation<NavigationProp<LoginStackParams>>();

	return (
		<Page>
			<StatusBar backgroundColor='#3B3DBF' barStyle='light-content' />

			<BtBack
				onPress={() => {
					navigation.goBack();
                }}
			>
                <FontAwesomeIcon
                    name='chevron-left'
                    color='white'
                    size={20}
                />
				<BtBackTxt>Voltar</BtBackTxt>
			</BtBack>

			<Container>
				<Form>
					<Input value={name} setValue={setName} placeholder='Nome' />

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

					<Button title='Cadastrar' />
				</Form>
			</Container>
		</Page>
	);
}
