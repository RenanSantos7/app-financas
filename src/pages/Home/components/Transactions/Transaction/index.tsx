import { Alert, TouchableWithoutFeedback } from 'react-native';
import {
	Container,
	Description,
	TypeIn,
	TypeOut,
	TypeTxt,
	Value,
} from './styles';
import { ITransaction } from '../../../../../types/types';
import FeatherIcon from 'react-native-vector-icons/Feather';
import formatCurrency from '../../../../../utils/formatCurrency';
import { useDataContext } from '../../../../../contexts/DataContext';

interface TransactionProps {
	item: ITransaction;
}

export default function Transaction(props: TransactionProps) {
	const { deleteTransaction } = useDataContext();

	return (
		<TouchableWithoutFeedback
			onLongPress={() => {
				Alert.alert(
					'Atenção',
					'Você tem certeza de que quer deletar este registro?',
					[
						{ text: 'Cancelar', style: 'cancel' },
						{
							text: 'Continuar',
							onPress: () => {
								deleteTransaction(props.item.id);
							},
						},
					],
				);
			}}
		>
			<Container>
				{props.item.type === 'despesa' ? (
					<TypeOut>
						<FeatherIcon
							name='arrow-down'
							color='white'
							size={16}
						/>
						<TypeTxt>despesa</TypeTxt>
					</TypeOut>
				) : (
					<TypeIn>
						<FeatherIcon name='arrow-up' color='white' size={16} />
						<TypeTxt>receita</TypeTxt>
					</TypeIn>
				)}

				<Value>{formatCurrency(props.item.value)}</Value>

				<Description>
					{props.item.description
						? props.item.description
						: 'Sem descrição'}
				</Description>
			</Container>
		</TouchableWithoutFeedback>
	);
}
