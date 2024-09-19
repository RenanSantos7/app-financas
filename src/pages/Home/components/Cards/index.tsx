import { useEffect, useMemo } from 'react';
import { useDataContext } from '../../../../contexts/DataContext';
import formatCurrency from '../../../../utils/formatCurrency';
import {
	CardBalance,
	CardContent,
	CardInflow,
	CardOutflow,
	CardTitle,
	Container,
} from './styles';
import { ScrollView } from 'react-native';

interface CardsProps {}

export default function Cards(props: CardsProps) {
	const { balanceList } = useDataContext();

	const movements = useMemo(() => {
		const array = balanceList.map(item => Object.values(item))
		return Object.fromEntries(array)
	}, [balanceList]);

	return (
		<Container>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
			>
				<CardBalance>
					<CardTitle>Saldo</CardTitle>
					<CardContent>{formatCurrency(movements.saldo)}</CardContent>
				</CardBalance>
	
				<CardInflow>
					<CardTitle>Entradas de hoje</CardTitle>
					<CardContent>{formatCurrency(movements.receita)}</CardContent>
				</CardInflow>
	
				<CardOutflow>
					<CardTitle>Saídas de hoje</CardTitle>
					<CardContent>{formatCurrency(movements.despesa)}</CardContent>
				</CardOutflow>
			</ScrollView>
		</Container>
	);
}
