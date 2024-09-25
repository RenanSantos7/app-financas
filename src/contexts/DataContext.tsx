import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { format } from 'date-fns';

import { ITransaction } from '../types/types';
import { useAuthContext } from './AuthContext';
import api from '../services/api';

interface IDataContext {
	date: Date;
	setDate: Dispatch<SetStateAction<Date>>;
	balanceList: { tag: string; saldo: number }[];
	transactionsList: ITransaction[];
	getBalance: (isActive: boolean) => void;
	getTransactions: (isActive: boolean) => void;
	registerTransaction: (
		description: string,
		value: number,
		type: 'receita' | 'despesa',
		date: string,
	) => void;
	deleteTransaction: (id: string) => void;
}

const DataContext = createContext<IDataContext>(null);

export default function DataProvider({ children }: { children: ReactNode }) {
	const [balanceList, setBalanceList] = useState([]);
	const [date, setDate] = useState(new Date());
	const [transactionsList, setTransactionsList] = useState<ITransaction[]>(
		[],
	);

	const dateStr = useMemo(() => {
		// * para corrigir eventuais problemas de timezone
		const rightDate = date.valueOf() + date.getTimezoneOffset() * 60000;
		return format(rightDate, 'dd/MM/yyyy');
	}, [date])

	const { setLoading } = useAuthContext();

	async function getBalance(isActive: boolean) {
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
			await api.post('/receive', {
				description,
				value,
				type,
				date,
			});
		} catch (error) {
			console.error('Erro ao cadastrar movimentação:', error);
		} finally {
			setDate(new Date());
			setLoading(false);
		}
	}

	async function getTransactions(isActive: boolean) {
		const transactions = await api.get('/receives', {
			params: { date: dateStr },
		});

		if (isActive) {
			setTransactionsList(transactions.data);
		}
	}

	async function deleteTransaction(id: string) {
		try {
			await api.delete('/receives/delete', {
				params: {
					item_id: id
				}
			});
			setDate(new Date());
		} catch (error) {
			console.error('Erro ao deletar: ',error)
		}
	}

	return (
		<DataContext.Provider
			value={{
				date,
				setDate,
				balanceList,
				transactionsList,
				getBalance,
				getTransactions,
				registerTransaction,
				deleteTransaction,
			}}
		>
			{children}
		</DataContext.Provider>
	);
}

export function useDataContext() {
	return useContext(DataContext);
}
