import { Text, StatusBar } from 'react-native';

import Page from '../../components/Page';
import { Container } from './styles';
import Cards from './components/Cards';
import Transactions from './components/Transactions';
import { useState } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import Header from '../../components/Header';

export default function Home() {
	const [modalConfirmOpen, setModalConfirmOpen] = useState(false);
	const { signOutUser } = useAuthContext();

	return (
		<Page
			navBarColor='white'
			modalOpen={modalConfirmOpen}
			setModalOpen={setModalConfirmOpen}
			onConfirm={signOutUser}
		>
			<Header
				title='Minhas transações'
				setModalConfirmOpen={setModalConfirmOpen}
			/>
			<StatusBar backgroundColor='#F0F4FF' barStyle='dark-content' />
			<Container>
				<Cards />
				<Transactions />
			</Container>
		</Page>
	);
}
