import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';
import { format } from 'date-fns';

import { IReceive } from '../types/types';
import api from '../services/api';

interface IDataContext {
	balanceList: IReceive[];
	getBalance: (date: Date, isActive: boolean) => void;
}

const DataContext = createContext<IDataContext>(null);

export default function DataProvider({ children }: { children: ReactNode }) {
	const [balanceList, setBalanceList] = useState<IReceive[]>([]);

	async function getBalance(date: Date, isActive: boolean) {
		let dateStr = format(date, 'dd/MM/yyyy');

		const balance = await api.get('/balance', {
			params: {
				date: dateStr,
			},
		});
		if (isActive) setBalanceList(balance.data);
	}

	return (
		<DataContext.Provider value={{ balanceList, getBalance }}>
			{children}
		</DataContext.Provider>
	);
}

export function useDataContext() {
	return useContext(DataContext);
}
