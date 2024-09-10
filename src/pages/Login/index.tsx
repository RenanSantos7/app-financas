import { StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { Container, Form, StyledText } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

	return (
		<Container>
            <StatusBar
                backgroundColor='#F0F4FF'
                barStyle='dark-content'
            />
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
    
                <Button
                    title='Acessar'
                />

                <Button
                    title='Criar conta gratuita'
                    variant='only-text'
                />

                <Button title='Sair' variant='outlined' />
            </Form>
		</Container>
	);
}
