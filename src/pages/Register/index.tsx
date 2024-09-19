import { useState } from 'react';
import Feather from '@expo/vector-icons/Feather';

import { SwitchButton, BtnContainer, Container, ButtonTxt } from './styles';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { Text } from 'react-native';
import Button from '../../components/Button';

export default function Register() {
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [type, setType] = useState<'receita' | 'despesa'>('receita');

	return (
		<Page>
			<Header title='Nova movimentação' />
			<Container>
				<Input
					placeholder='Descrição'
					value={description}
					setValue={setDescription}
					autoFocus
					autoCapitalize
				/>

				<Input
					placeholder='Valor da movimentação'
					value={price}
					setValue={setPrice}
					keyboardType='decimal-pad'
				/>

				<BtnContainer>
					<SwitchButton
						onPress={() => {
							setType('receita');
						}}
						selected={type === 'receita'}
					>
						<Feather name='arrow-up' size={24} color='black' />
						<ButtonTxt>Receita</ButtonTxt>
					</SwitchButton>

					<SwitchButton
						onPress={() => {
							setType('despesa');
						}}
						selected={type === 'despesa'}
					>
						<Feather name='arrow-down' size={24} color='black' />
						<ButtonTxt>Despesa</ButtonTxt>
					</SwitchButton>
				</BtnContainer>
				<Button
					title='Registar'
					color='#00B94A'
					onPress={() => {
						alert('Registrado');
					}}
				/>
			</Container>
		</Page>
	);
}
