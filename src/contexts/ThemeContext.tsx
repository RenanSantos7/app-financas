import { ThemeProvider } from 'styled-components/native';
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { useColorScheme } from 'react-native';

import { IColorTheme, ITheme } from '../types/types';
import { darkTheme } from '../themes/darkTheme';
import { lightTheme } from '../themes/lightTheme';

interface IThemeContext {
	theme: ITheme;
}

const ThemeContext = createContext<IThemeContext>(null);

export default function AppThemeProvider({
	children,
}: {
	children: ReactNode;
}) {
	const [colorTheme, setColorTheme] = useState<IColorTheme>(lightTheme);

	const theme = useMemo<ITheme>(() => ({
		sizes: {
			font: {
				body: 16,
				title1: 24,
				title2: 22,
				title3: 18,
				max: 36,
				small: 12
			},
			spacing: 14,
			borderRadius: {
				large: 16, 
				main: 8,
				small: 4,
			}
		},
		...colorTheme
	}), [colorTheme]);

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
