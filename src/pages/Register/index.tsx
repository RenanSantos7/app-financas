import { format } from 'date-fns';
import { useState } from 'react';
import Feather from '@expo/vector-icons/Feather';

import { SwitchButton, BtnContainer, Container, ButtonTxt } from './styles';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Input from '../../components/Input';
import InputNumber from '../../components/InputNumber';
import Button from '../../components/Button';
import { useDataContext } from '../../contexts/DataContext';

export default function Register() {
	const [description, setDescription] = useState('');
	const [value, setValue] = useState(0);
	const [type, setType] = useState<'receita' | 'despesa'>('receita');

	const { registerTransaction } = useDataContext();

	function handleSubmit() {
		const date = new Date();
		const dateStr = format(date, 'dd/MM/yyyy');

		if (!!description && value > 0) {
			registerTransaction(description, value, type, dateStr);
		} else if (!description) {
			alert('Você deve dar uma descrição para esta movimentação.')
		} else {
			alert('A movimentação não pode ficar sem um valor.')
		}

		setDescription('');
		setValue(0);
	}

	return (
		<Page>
			<Header title='Nova movimentação' />
			<Container>
				<Input
					label='Descrição'
					placeholder='Uma que possa lembrar depois'
					value={description}
					setValue={setDescription}
					autoFocus
					autoCapitalize
				/>

				<InputNumber
					label='Valor da movimentação'
					value={value}
					setValue={setValue}
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
					onPress={handleSubmit}
				/>
			</Container>
		</Page>
	);
}
