import 'react-native-gesture-handler'
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
