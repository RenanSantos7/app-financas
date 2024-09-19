import { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';

import { Container } from './styles';
import { IReceive } from '../../types/types';
import Cards from './components/Cards';
import Header from '../../components/Header';
import Page from '../../components/Page';
import Transactions from './components/Transactions';
import { useDataContext } from '../../contexts/DataContext';

export default function Home() {
	const [date, setDate] = useState(new Date());

	const isFocused = useIsFocused();
	const { getBalance } = useDataContext();

	useEffect(() => {
		let isActive = true;
		getBalance(date, isActive);

		return () => {
			isActive = false;
		};
	}, [isFocused]);

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
