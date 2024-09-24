// import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
import AuthProvider from './src/contexts/AuthContext';
import DataProvider from './src/contexts/DataContext';
import AppThemeProvider from './src/contexts/ThemeContext';

export default function App() {
	return (
		<NavigationContainer>
			<AppThemeProvider>
				<AuthProvider>
					<DataProvider>
						<Routes />
					</DataProvider>
				</AuthProvider>
			</AppThemeProvider>
		</NavigationContainer>
	);
}
