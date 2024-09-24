import { Alert } from 'react-native';
import {
	Container,
	Description,
	TypeIn,
	TypeOut,
	TypeTxt,
	Value,
	Wrapper,
} from './styles';
import { ITransaction } from '../../../../../types/types';
import FeatherIcon from 'react-native-vector-icons/Feather';
import formatCurrency from '../../../../../utils/formatCurrency';

interface TransactionProps {
	item: ITransaction;
}

export default function Transaction(props: TransactionProps) {
	return (
		<Container
			activeOpacity={0.8}
			onLongPress={() => {
				Alert.alert(
					'Confirmação',
					'Tem certeza de que quer deletar este registro?',
				);
			}}
		>
			<Wrapper>
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
			</Wrapper>
		</Container>
	);
}
