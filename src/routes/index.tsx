import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { useState } from 'react';

import AuthRoutes from './AuthRoutes';
import { useAuthContext } from '../contexts/AuthContext';

export default function Routes() {
    const [loading, setLoading] = useState(false);
    const isSignedIn = false;
    
    //const { isSignedIn } = useAuthContext();

	return (
		<NavigationContainer>
			{isSignedIn ? <View></View> : <AuthRoutes />}
		</NavigationContainer>
	);
}
