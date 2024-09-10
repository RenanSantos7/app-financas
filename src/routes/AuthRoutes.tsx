import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginStackParams } from "../types/types";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const Stack = createNativeStackNavigator<LoginStackParams>();

export default function AuthRoutes() {
    return (
	        <Stack.Navigator 
		        screenOptions={{ headerShown: false }}
		     >
	            <Stack.Screen
	                name="Login"
	                component={Login}
	            />
	            
	            <Stack.Screen
	                name="SignUp"
	                component={SignUp}
	            />
	        </Stack.Navigator>
    )
};
