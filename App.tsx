import { StatusBar, Text, View } from 'react-native';
import Routes from './src/routes';
import AuthProvider from './src/contexts/AuthContext';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
	return (
		<NavigationContainer>
			<AuthProvider>
				<Routes />
			</AuthProvider>
		</NavigationContainer>
	);
}
