import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AppRoutesParams } from '../types/types';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import TabBar from '../components/TabBar';

const Tab = createBottomTabNavigator<AppRoutesParams>();

export default function AppRoutes() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
			}}
			tabBar={({ state }) => <TabBar state={state} />}
		>
			<Tab.Screen name='Home' component={Home} />

			<Tab.Screen name='Registrar' component={Register} />

			<Tab.Screen name='Perfil' component={Profile} />
		</Tab.Navigator>
	);
}
