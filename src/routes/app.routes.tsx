import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppDrawerParams } from '../types/types';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Register from '../pages/Register';

const Drawer = createDrawerNavigator<AppDrawerParams>();

export default function AppRoutes() {
	return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: '#fff',
                    paddingTop: 30
                },
                drawerActiveBackgroundColor: '#3B3DBF',
                drawerActiveTintColor: 'white',
                drawerInactiveBackgroundColor: '#eee',
            }}
        >
            <Drawer.Screen
                name='Home'
                component={Home}
            />
			
            <Drawer.Screen
                name='Perfil'
                component={Profile}
            />

            <Drawer.Screen
                name='Registrar'
                component={Register}
            />
		</Drawer.Navigator>
	);
}
