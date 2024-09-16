import { ReactNode, useLayoutEffect } from 'react';
import styled from 'styled-components/native';
import * as NavigationBar from 'expo-navigation-bar';

import { useAuthContext } from '../../contexts/AuthContext';
import Loading from '../../components/Loading'

export default function Page({ children }: { children: ReactNode }) {
	const { loading } = useAuthContext();

    useLayoutEffect(() => {
		NavigationBar.setBackgroundColorAsync('#f0f4ff');
		NavigationBar.setButtonStyleAsync('dark');
	}, []);

	return (
		<Container>
			{children}

			<Loading loading={loading} />
		</Container>
	);
}

const Container = styled.View`
	flex: 1;
	background-color: #f0f4ff;
`;
