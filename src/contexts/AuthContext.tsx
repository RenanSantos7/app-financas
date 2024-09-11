import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { IUser } from '../types/types';
import isNonEmptyObj from '../utils/isEmptyObj';

interface IAuthContext {
    user: IUser;
    isSignedIn: boolean;
    createUser: (name: string, email: string, password: string) => void;
}

const AuthContext = createContext<IAuthContext>(null);

export default function AuthProvider({ children }: { children: ReactNode }) {

	const [user, setUser] = useState<IUser>({
		name: 'João das Neves',
		email: 'joaodasneves@email.com',
		password: '123456',
		uid: '0',
    });

    const [isSignedIn, setIsSignedIn] = useState(false);
    
    function createUser(name: string, email: string, password: string) {
        const newUser = { name, email, password };
        const newUid = Math.random() * 10000;

        setUser({
            uid: `${newUid}`,
            ...newUser
        })
    }

    useEffect(() => {
        if (isNonEmptyObj(user)) {
            setIsSignedIn(true);
        } else {
            setIsSignedIn(false);
        }
    }, [user]);

	return (
        <AuthContext.Provider value={{ user, isSignedIn, createUser }}>
            {children}
        </AuthContext.Provider>
	);
}

export function useAuthContext() {
	return useContext(AuthContext);
}
