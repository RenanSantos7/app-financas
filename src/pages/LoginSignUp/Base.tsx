import { ReactNode, useLayoutEffect } from 'react';
import styled from 'styled-components/native';
import * as NavigationBar from 'expo-navigation-bar';

export default function Page({ children }: { children: ReactNode }) {

    useLayoutEffect(() => {
		NavigationBar.setBackgroundColorAsync('#f0f4ff');
		NavigationBar.setButtonStyleAsync('dark');
	}, []);

	return (
		<Container>
			{children}
		</Container>
	);
}

const Container = styled.View`
	flex: 1;
	background-color: #f0f4ff;
`;
