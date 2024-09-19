import 'react-native-gesture-handler'
import Routes from './src/routes';
import AuthProvider from './src/contexts/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import DataProvider from './src/contexts/DataContext';

export default function App() {
	return (
		<NavigationContainer>
			<AuthProvider>
				<DataProvider>
					<Routes />
				</DataProvider>
			</AuthProvider>
		</NavigationContainer>
	);
}
