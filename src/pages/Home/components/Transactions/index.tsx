import { Alert, FlatList, Modal, Pressable, Text, View } from 'react-native';
import { Dispatch, SetStateAction, useState } from 'react';
import { useTheme } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { Container, Header, HeaderTxt, Separator } from './styles';
import { useDataContext } from '../../../../contexts/DataContext';
import CalendarFilter from '../Calendar';
import Transaction from './Transaction';

export default function Transactions() {
	const [modalVisible, setModalVisible] = useState(false);
	const { transactionsList, setDate } = useDataContext();
	const theme = useTheme();

	return (
		<Container>
			<Header>
				<HeaderTxt>Últimas movimentações</HeaderTxt>
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
