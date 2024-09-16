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
    name: string;
    email: string;
    password: string;
    uid: string;
}