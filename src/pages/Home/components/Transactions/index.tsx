import FeatherIcon from 'react-native-vector-icons/Feather';

import {
    BtnContainer,
	Container,
	Header,
	HeaderTxt,
	Separator,
	Transaction,
	TransactionTypeIn,
	TransactionTypeOut,
	TransactionTypeTxt,
	TransactionValue,
    TransactionWrapper,
} from './styles';
import { FlatList } from 'react-native-gesture-handler';
import { View } from 'react-native';
import formatCurrency from '../../../../utils/formatCurrency';

interface TransactionsProps {}

const movimentacoes = [
	{ id: '0', tipo: 'despesa', valor: 35 },
	{ id: '1', tipo: 'receita', valor: 1200.35 },
	{ id: '2', tipo: 'despesa', valor: 5 },
	{ id: '3', tipo: 'despesa', valor: 3 },
	{ id: '5', tipo: 'receita', valor: 350 },
	{ id: '6', tipo: 'despesa', valor: 178.63 },
	{ id: '7', tipo: 'despesa', valor: 35 },
];

export default function Transactions(props: TransactionsProps) {
	return (
		<Container>
			<Header>
				<FeatherIcon name='calendar' size={20} />
				<HeaderTxt>Últimas movimentações</HeaderTxt>
			</Header>

			<FlatList
				data={movimentacoes}
				renderItem={({ item }) => (
					<Transaction>
						<TransactionWrapper>
						    {item.tipo === 'despesa' ? (
    							<TransactionTypeOut>
    								<FeatherIcon
    									name='arrow-down'
    									color='white'
    									size={16}
    								/>
    								<TransactionTypeTxt>despesa</TransactionTypeTxt>
    							</TransactionTypeOut>
    						) : (
    							<TransactionTypeIn>
    								<FeatherIcon
    									name='arrow-up'
    									color='white'
    									size={16}
    								/>
    								<TransactionTypeTxt>receita</TransactionTypeTxt>
    							</TransactionTypeIn>
    						)}
    
    						<TransactionValue>
    							{formatCurrency(item.valor)}
    						</TransactionValue>
                        </TransactionWrapper>
                        
                        <BtnContainer>
                            <FeatherIcon
                                name='edit'
                                size={20}
                            />
                            
                            <FeatherIcon
                                name='trash'
                                size={20}
                                color='#EF463A'
                            />
                        </BtnContainer>
					</Transaction>
				)}
				ItemSeparatorComponent={() => <Separator />}
                style={{ marginTop: 14 }}
                showsVerticalScrollIndicator={false}
			/>
		</Container>
	);
}
