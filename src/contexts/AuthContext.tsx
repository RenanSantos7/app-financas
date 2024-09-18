import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { IUser, LoginStackParams } from '../types/types';
import api from '../services/api';

interface IAuthContext {
	user: IUser;
	isSignedIn: boolean;
	signUpUser: (name: string, email: string, password: string) => void;
	signInUser: (email: string, password: string) => void;
	signOutUser: () => void;
	loading: boolean;
}

const AuthContext = createContext<IAuthContext>(null);

export default function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<IUser>(null);
	// const [isSignedIn, setIsSignedIn] = useState(false);
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

	async function signInUser(email: string, password: string) {
		setLoading(true);
		try {
			const response = await api.post('/login', {
				email,
				password,
			});

			const { name, id, token } = response.data;

			api.defaults.headers['Authorization'] = `Bearer ${token}`;
			await AsyncStorage.setItem('authToken', token);

			setTimeout(() => {
				setUser({ id, name, email });
			}, 1000);
		} catch (error) {
			console.error('Erro ao logar: ', error);
		} finally {
			setTimeout(() => {
				setLoading(false);
			}, 300);
		}
	}

	async function signOutUser() {
		await AsyncStorage.clear()
			.then(() => { 
				setUser(null);
			})
	}

	async function readTokenFromAsyncStorage() {
		setLoading(true);
		try {
			const token = await AsyncStorage.getItem('authToken');
			if (token) {
				const response = await api.get('/me', {
					headers: { Authorization: `Bearer ${token}` },
				});
				api.defaults.headers['Authorization'] = `Bearer ${token}`;
				setUser({ ...response.data });
			}
		} catch (error) {
			setUser(null);
			console.error(error);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		readTokenFromAsyncStorage();
	}, []);

	return (
		<AuthContext.Provider
			value={{
				user,
				isSignedIn: !!user,
				signUpUser,
				signInUser,
				signOutUser,
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
