import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

import { ITransaction } from '../types/types';
import { useAuthContext } from './AuthContext';
import api from '../services/api';

interface IDataContext {
	balanceList: { tag: string; saldo: number }[];
	transactionsList: ITransaction[];
	getBalance: (date: Date, isActive: boolean) => void;
	getTransactions: (date: Date, isActive: boolean) => void;
	registerTransaction: (
		description: string,
		value: number,
		type: 'receita' | 'despesa',
		date: string,
	) => void;
}

const DataContext = createContext<IDataContext>(null);

export default function DataProvider({ children }: { children: ReactNode }) {
	const [balanceList, setBalanceList] = useState([]);
	const [transactionsList, setTransactionsList] =
		useState<ITransaction[]>([]);

	const { loading, setLoading } = useAuthContext();
	const navigation = useNavigation();

	async function getBalance(date: Date, isActive: boolean) {
		let dateStr = format(date, 'dd/MM/yyyy');

		const balance = await api.get('/balance', {
			params: { date: dateStr },
		});
		if (isActive) setBalanceList(balance.data);
	}

	async function registerTransaction(
		description: string,
		value: number,
		type: 'receita' | 'despesa',
		date: string,
	) {
		setLoading(true);
		try {
			const response = await api.post('/receive', {
				description,
				value,
				type,
				date,
			});
		} catch (error) {
			console.error('Erro ao cadastrar movimentação:', error);
		} finally {
			setLoading(false);
			navigation.goBack();
		}
	}

	async function getTransactions(date: Date, isActive: boolean) {
		let dateStr = format(date, 'dd/MM/yyyy');

		const transactions = await api.get('/balance', {
			params: { date: dateStr },
		});
		if (isActive) {
			setTransactionsList(transactions.data);
		}
	}

	return (
		<DataContext.Provider
			value={{
				balanceList,
				transactionsList,
				getBalance,
				getTransactions,
				registerTransaction,
			}}
		>
			{children}
		</DataContext.Provider>
	);
}

export function useDataContext() {
	return useContext(DataContext);
}
