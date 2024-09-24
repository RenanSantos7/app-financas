import { useEffect, useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import { Container } from './styles';
import { useDataContext } from '../../contexts/DataContext';
import Cards from './components/Cards';
import Header from '../../components/Header';
import Page from '../../components/Page';
import Transactions from './components/Transactions';

export default function Home() {

	const isFocused = useIsFocused();
	const { date, getBalance, getTransactions } = useDataContext();

	useEffect(() => {
		let isActive = true;
		getBalance(isActive);
		getTransactions(isActive);

		return () => {
			isActive = false;
		};
	}, [isFocused, date]);

	return (
		<Page navBarColor='white'>
			<Header title='Minhas transações' />

			<Container>
				<Cards />
				<Transactions />
			</Container>
		</Page>
	);
}
