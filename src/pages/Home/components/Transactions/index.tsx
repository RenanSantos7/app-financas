import { Alert, FlatList, Pressable, Text, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {
	Container,
	Header,
	HeaderTxt,
	Separator,
} from './styles';
import { useDataContext } from '../../../../contexts/DataContext';
import { Dispatch, SetStateAction } from 'react';
import Transaction from './Transaction';

interface TransactionsProps {
	setDate: Dispatch<SetStateAction<Date>>;
}

export default function Transactions(props: TransactionsProps) {
	const { transactionsList } = useDataContext();
	return (
		<Container>
			<Header>
				<HeaderTxt>Últimas movimentações</HeaderTxt>
				<FeatherIcon
					name='calendar'
					size={28}
					onPress={() => {alert('Calendário')}}
				/>
			</Header>

			<FlatList
				data={transactionsList}
				renderItem={({ item }) => <Transaction item={item} />}
				ItemSeparatorComponent={() => <Separator />}
				style={{ marginTop: 14, marginBottom: 60 }}
				showsVerticalScrollIndicator={false}
			/>
		</Container>
	);
}
