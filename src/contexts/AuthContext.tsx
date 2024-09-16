import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { IUser, LoginStackParams } from '../types/types';
import api from '../services/api';
import isNonEmptyObj from '../utils/isEmptyObj';

interface IAuthContext {
	user: IUser;
	isSignedIn: boolean;
	signUpUser: (name: string, email: string, password: string) => void;
	loading: boolean;
}

const AuthContext = createContext<IAuthContext>(null);

export default function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<IUser>({
		name: 'João das Neves',
		email: 'joaodasneves@email.com',
		password: '123456',
		uid: '0',
	});
	const [isSignedIn, setIsSignedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const navigation = useNavigation<NavigationProp<LoginStackParams>>();

	async function signUpUser(name: string, email: string, password: string) {
		setLoading(true);
		try {
			const response = await api.post('/users', {
				name,
				email,
				password,
			});
		} catch (error) {
			console.error('Erro ao cadastrar:', error);
		} finally {
			setTimeout(() => {
				setLoading(false);
            }, 1000);
            navigation.goBack();
		}
	}

	useEffect(() => {
		if (isNonEmptyObj(user)) {
			setIsSignedIn(true);
		} else {
			setIsSignedIn(false);
		}
	}, [user]);

	return (
		<AuthContext.Provider
			value={{
				user,
				isSignedIn,
				signUpUser,
				loading,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuthContext() {
	return useContext(AuthContext);
}
