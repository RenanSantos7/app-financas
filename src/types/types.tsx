import { ColorValue } from "react-native";

export type AuthRoutesParams = {
    Login: undefined;
    SignUp: undefined;
}

export type AppRoutesParams = {
    Home: undefined;
    Registrar: undefined;
    Perfil: undefined;
}

export interface IUser {
    id: string;
    name: string;
    email: string;
    balance?: number;
    created_at?: string;
    updated_at?: string;
}

export interface ITransaction {
    id: string;
    description: string;
    value: 5;
    type: string;
    date: string;
    created_at: string;
    updated_at: string;
    user_id: string;
}

export interface ITheme {
    colors: {
		primary: {
			main: ColorValue;
			light: ColorValue;
		},
		success: ColorValue;
		background: {
			main: ColorValue;
			light: ColorValue;
			inactive: ColorValue;
		},
		text: {
			main: ColorValue;
            title: ColorValue;
            light: ColorValue;
            placeholder: ColorValue;
		},
		danger: ColorValue;
	},
}