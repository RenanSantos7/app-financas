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

interface CardsProps {}

export default function Cards(props: CardsProps) {
	const { balanceList } = useDataContext();

	const transactions = useMemo(() => {
		const array = balanceList.map(item => Object.values(item))
		return Object.fromEntries(array)
	}, [balanceList])

	useEffect(() => {
		console.log(transactions);
	},[transactions]);

	return (
		<Container horizontal showsHorizontalScrollIndicator={false}>
			<CardBalance>
				<CardTitle>Saldo</CardTitle>
				<CardContent>{formatCurrency(transactions.saldo)}</CardContent>
			</CardBalance>

			<CardInflow>
				<CardTitle>Entradas de hoje</CardTitle>
				<CardContent>{formatCurrency(transactions.receita)}</CardContent>
			</CardInflow>

			<CardOutflow>
				<CardTitle>Saídas de hoje</CardTitle>
				<CardContent>{formatCurrency(transactions.despesa)}</CardContent>
			</CardOutflow>
		</Container>
	);
}
