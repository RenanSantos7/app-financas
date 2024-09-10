import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { useState } from 'react';

import AuthRoutes from './AuthRoutes';

export default function Routes() {
    const [signedIn, setSignedIn] = useState(false);
	const [loading, setLoading] = useState(false);
    return (
        <NavigationContainer>
        {signedIn ? <View></View> : <AuthRoutes />}
    </NavigationContainer>
    );
};