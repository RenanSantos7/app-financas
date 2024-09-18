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
	return (
		<Container
			horizontal
			showsHorizontalScrollIndicator={false}
		>
			<CardBalance>
				<CardTitle>Saldo</CardTitle>
				<CardContent>R$ 1.200,00</CardContent>
			</CardBalance>

			<CardInflow>
				<CardTitle>Entradas de hoje</CardTitle>
				<CardContent>R$ 200,00</CardContent>
			</CardInflow>

			<CardOutflow>
				<CardTitle>Saídas de hoje</CardTitle>
				<CardContent>R$ 200,00</CardContent>
			</CardOutflow>
		</Container>
	);
}
