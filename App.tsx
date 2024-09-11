import { StatusBar, Text, View } from 'react-native';
import Routes from './src/routes';
import AuthProvider from './src/contexts/AuthContext';

export default function App() {
	return (
		<AuthProvider>
			<View style={{ flex: 1 }}>
				<StatusBar />
				<Routes />
			</View>
		</AuthProvider>
	);
}
