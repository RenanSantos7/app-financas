import { FlatList } from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {
	BtnContainer,
	Container,
	Header,
	HeaderTxt,
	Separator,
	Transaction,
	TransactionDescription,
	TransactionTypeIn,
	TransactionTypeOut,
	TransactionTypeTxt,
	TransactionValue,
	TransactionWrapper,
} from './styles';
import { useDataContext } from '../../../../contexts/DataContext';
import formatCurrency from '../../../../utils/formatCurrency';

interface TransactionsProps {}

export default function Transactions(props: TransactionsProps) {
	const { transactionsList } = useDataContext();
	return (
		<Container>
			<Header>
				<FeatherIcon name='calendar' size={20} />
				<HeaderTxt>Últimas movimentações</HeaderTxt>
			</Header>

			<FlatList
				data={transactionsList}
				renderItem={({ item }) => (
					<Transaction>
						<TransactionWrapper>
							{item.type === 'despesa' ? (
								<TransactionTypeOut>
									<FeatherIcon
										name='arrow-down'
										color='white'
										size={16}
									/>
									<TransactionTypeTxt>
										despesa
									</TransactionTypeTxt>
								</TransactionTypeOut>
							) : (
								<TransactionTypeIn>
									<FeatherIcon
										name='arrow-up'
										color='white'
										size={16}
									/>
									<TransactionTypeTxt>
										receita
									</TransactionTypeTxt>
								</TransactionTypeIn>
							)}

							<TransactionValue>
								{formatCurrency(item.value)}
							</TransactionValue>

							<TransactionDescription>{item.description ? item.description : 'Sem descrição'}</TransactionDescription>
						</TransactionWrapper>

						{/* <BtnContainer>
							<FeatherIcon name='edit' size={20} />

							<FeatherIcon
								name='trash'
								size={20}
								color='#EF463A'
							/>
						</BtnContainer> */}
					</Transaction>
				)}
				ItemSeparatorComponent={() => <Separator />}
				style={{ marginTop: 14 }}
				showsVerticalScrollIndicator={false}
			/>
		</Container>
	);
}
