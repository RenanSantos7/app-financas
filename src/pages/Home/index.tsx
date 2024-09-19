import { useEffect, useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import { Container } from './styles';
import { useDataContext } from '../../contexts/DataContext';
import Cards from './components/Cards';
import FloatingButton from '../../components/FloatingButton';
import Header from '../../components/Header';
import Page from '../../components/Page';
import Transactions from './components/Transactions';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { AppDrawerParams } from '../../types/types';

export default function Home() {
	const [date, setDate] = useState(new Date());

	const navigation = useNavigation<DrawerNavigationProp<AppDrawerParams>>()
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

			<FloatingButton
				onPress={() => {
					navigation.navigate('Registrar');
				}}
			/>
		</Page>
	);
}
