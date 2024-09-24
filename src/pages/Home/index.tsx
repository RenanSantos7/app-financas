import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useEffect, useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import { AppRoutesParams } from '../../types/types';
import { Container } from './styles';
import { useDataContext } from '../../contexts/DataContext';
import Cards from './components/Cards';
import Header from '../../components/Header';
import Page from '../../components/Page';
import Transactions from './components/Transactions';

export default function Home() {
	const [date, setDate] = useState(new Date());

	const navigation = useNavigation<BottomTabNavigationProp<AppRoutesParams>>()
	const isFocused = useIsFocused();
	const { getBalance, getTransactions } = useDataContext();

	useEffect(() => {
		let isActive = true;
		getBalance(date, isActive);
		getTransactions(date, isActive);

		return () => {
			isActive = false;
		};
	}, [isFocused]);

	return (
		<Page navBarColor='white'>
			<Header title='Minhas transações' />

			<Container>
				<Cards />
				<Transactions setDate={setDate} />
			</Container>
		</Page>
	);
}
