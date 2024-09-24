import { ThemeProvider } from 'styled-components/native';
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';
import { useColorScheme } from 'react-native';

import { ITheme } from '../types/types';
import { darkTheme } from '../themes/darkTheme';
import { lightTheme } from '../themes/lightTheme';

interface IThemeContext {
	theme: ITheme;
}

const ThemeContext = createContext<IThemeContext>(null);

export default function AppThemeProvider(
    { children }: { children: ReactNode })
{
	const [theme, setTheme] = useState(lightTheme);

	/*
    const colorScheme = useColorScheme();

    useEffect(() => {
        if (colorScheme === 'dark') {
            setTheme(darkTheme)
        } else {
            setTheme(lightTheme)
        }
    }, [colorScheme]); 
    */

	return (
		<ThemeContext.Provider value={{ theme }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	);
}

export function useThemeContext() {
	return useContext(ThemeContext);
}
