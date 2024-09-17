import { ReactNode, useLayoutEffect } from 'react';
import styled from 'styled-components/native';
import * as NavigationBar from 'expo-navigation-bar';

import { useAuthContext } from '../contexts/AuthContext';
import Loading from './Loading';

interface PageProps {
	children: ReactNode;
	navBarColor?: string;
	navBarBtnStyle?: 'dark' | 'light';
}

export default function Page({
	children,
	navBarColor = '#f0f4ff',
	navBarBtnStyle = 'dark',
}: PageProps) {
	const { loading } = useAuthContext();

	useLayoutEffect(() => {
		NavigationBar.setBackgroundColorAsync(navBarColor);
		NavigationBar.setButtonStyleAsync(navBarBtnStyle);
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
