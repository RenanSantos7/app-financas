import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { useEffect, useState } from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome6';

import { BtBack, BtBackTxt, Container, Form } from './styles';
import { LoginStackParams } from '../../types/types';
import Page from '../../components/Page';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useAuthContext } from '../../contexts/AuthContext';
import { isNonEmptyStr } from '../../utils';

export default function SignUpUser() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [allowSubmit, setAllowSubmit] = useState(false);

	const { signUpUser } = useAuthContext();

	const navigation = useNavigation<NavigationProp<LoginStackParams>>();

	function handleSignUp() {
		signUpUser(name, email, password);
	}

	useEffect(() => {
		if (
			isNonEmptyStr(email) &&
			isNonEmptyStr(name) &&
			isNonEmptyStr(password)
		) {
			setAllowSubmit(true);
		} else {
			setAllowSubmit(false);
		}
	}, [email, password, name]);

	return (
		<Page>
			<StatusBar backgroundColor='#3B3DBF' barStyle='light-content' />

			<BtBack
				onPress={() => {
					navigation.goBack();
				}}
			>
				<FontAwesomeIcon name='chevron-left' color='white' size={20} />
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

					<Button
						title='Cadastrar'
						disabled={!allowSubmit}
						onPress={handleSignUp}
					/>
				</Form>
			</Container>
		</Page>
	);
}
