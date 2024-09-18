import { useAuthContext } from '../contexts/AuthContext';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

export default function Routes() {
	const { isSignedIn } = useAuthContext();

	return isSignedIn ? <AppRoutes /> : <AuthRoutes />;
}
