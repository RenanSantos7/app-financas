import { View } from 'react-native';

import AuthRoutes from './AuthRoutes';
import { useAuthContext } from '../contexts/AuthContext';

export default function Routes() {
	const isSignedIn = false;

	//const { isSignedIn } = useAuthContext();

	return isSignedIn ? <View></View> : <AuthRoutes />;
}
