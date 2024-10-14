import { FlatList } from 'react-native';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useMemo, useState } from 'react';
import { useTheme } from 'styled-components/native';
import FeatherIcon from '@expo/vector-icons/Feather';

import { Container, Header, HeaderTxt, Separator } from './styles';
import { useDataContext } from '../../../../contexts/DataContext';
import CalendarFilter from '../Calendar';
import Transaction from './Transaction';

export default function Transactions() {
	const [modalVisible, setModalVisible] = useState(false);
	const { date, transactionsList, setDate } = useDataContext();
	const theme = useTheme();

	const filterDate = useMemo(() => {
		const today = new Date();
		const date2 = new Date(date.valueOf() + date.getTimezoneOffset() * 60000);
		today.setHours(10, 0, 0, 0);
		date2.setHours(10, 0, 0, 0);
		const yesterday = new Date(today);
		yesterday.setDate(today.getDate() - 1);

		if (date2.getTime() === yesterday.getTime()) {
			return 'Ontem';
		}
		
		if (date2.getTime() === today.getTime()) {
			return 'Hoje';
		}

		return format(date2, "d 'de' MMMM", { locale: ptBR });
	}, [date]);

	return (
		<Container>
			<Header>
				<HeaderTxt>{filterDate}</HeaderTxt>
				<FeatherIcon
					name='calendar'
					size={24}
					onPress={() => {
						setModalVisible(true);
					}}
					color={theme.colors.text.title}
				/>
			</Header>

			<FlatList
				data={transactionsList}
				renderItem={({ item }) => <Transaction item={item} />}
				ItemSeparatorComponent={() => <Separator />}
				style={{ marginTop: 14, marginBottom: 60 }}
				showsVerticalScrollIndicator={false}
			/>

			<CalendarFilter
				visible={modalVisible}
				setVisible={setModalVisible}
				onFilter={(date: Date) => {
					setDate(date);
				}}
			/>
		</Container>
	);
}
