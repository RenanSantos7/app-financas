import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome6';
import MaterialComIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
            tabBar={({state}) => <TabBar state={state}/>}
		>
			<Tab.Screen
				name='Home'
				component={Home}
				options={{
					title: 'Início',
					tabBarIcon: ({ focused, color }) => {
						if (focused) {
							return (
								<MaterialComIcons
									name='home-variant'
									size={32}
									color={color}
								/>
							);
						}
						return (
							<MaterialComIcons
								name='home-variant-outline'
								size={32}
								color='#ccc'
							/>
						);
					},
				}}
			/>

			<Tab.Screen
				name='Registrar'
				component={Register}
				options={{
                    tabBarShowLabel: false,
					tabBarIcon: ({ color }) => {
						return (
							<FontAwesomeIcon
								name='circle-plus'
								size={32}
								color='#3A3DBF'
							/>
						);
					},
				}}
			/>

			<Tab.Screen
				name='Perfil'
				component={Profile}
				options={{
					tabBarIcon: ({ focused, color }) => {
						if (focused) {
							return (
								<MaterialIcons
									name='person'
									size={32}
									color={color}
								/>
							);
						}
						return (
							<MaterialIcons
								name='person-outline'
								size={32}
								color='#ccc'
							/>
						);
					},
				}}
			/>
		</Tab.Navigator>
	);
}

