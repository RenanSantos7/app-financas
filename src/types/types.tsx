export type LoginStackParams = {
    Login: undefined;
    SignUp: undefined;
}

export type AppDrawerParams = {
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