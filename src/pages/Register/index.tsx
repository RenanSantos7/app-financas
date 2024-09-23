import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

import { SwitchButton, BtnContainer, Container, ButtonTxt } from './styles';
import { useDataContext } from '../../contexts/DataContext';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import InputNumber from '../../components/InputNumber';
import Page from '../../components/Page';
import formatCurrency from '../../utils/formatCurrency';

export default function Register() {
	const [description, setDescription] = useState('');
	const [value, setValue] = useState(0);
	const [type, setType] = useState<'receita' | 'despesa'>('receita');

	const { registerTransaction } = useDataContext();
	const navigation = useNavigation();

	function handleSubmit() {
		Keyboard.dismiss();

		if (!description) {
			Alert.alert('Atenção', 'A descrição não pode ficar vazia');
			return;
		}

		if (value === 0 || value === undefined || value === null) {
			Alert.alert(
				'Atenção',
				'O valor da operação não pode ficar R$ 0,00',
			);
			return;
		}

		Alert.alert(
			'Confirmando dados',
			`
			Tipo: ${type}
			Descrição: ${description}
			Valor: ${formatCurrency(value)}
			`,
			[
				{ text: 'Cancelar', style: 'cancel' },
				{
					text: 'OK',
					onPress: () => handleAdd(),
				},
			],
		);
		
	}

	function handleAdd() {
		const dateStr = format(new Date(), 'dd/MM/yyyy');
		registerTransaction(description, value, type, dateStr);
		setDescription('');
		setValue(0);
		navigation.goBack();
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
							<Feather
								name='arrow-down'
								size={24}
								color='black'
							/>
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
		</TouchableWithoutFeedback>
	);
}
