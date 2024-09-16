import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginStackParams } from '../types/types';
import Login from '../pages/LoginSignUp/Login';
import SignUpUser from '../pages/LoginSignUp/SignUp';

const Stack = createNativeStackNavigator<LoginStackParams>();

export default function AuthRoutes() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen
				name='Login'
				component={Login}
			/>

			<Stack.Screen
				name='SignUp'
				component={SignUpUser}
			/>
		</Stack.Navigator>
	);
}
