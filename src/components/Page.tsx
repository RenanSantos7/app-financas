import { Dispatch, ReactNode, SetStateAction, useLayoutEffect } from 'react';
import styled from 'styled-components/native';
import * as NavigationBar from 'expo-navigation-bar';

import { useAuthContext } from '../contexts/AuthContext';
import Loading from './Loading';
import { StatusBar } from 'react-native';
import ModalConfirm from './ModalConfirm';

interface PageProps {
	children: ReactNode;
	navBarColor?: string;
	navBarBtnStyle?: 'dark' | 'light';
	statusBarColor?: string;
	statusBarStyle?: 'default' | 'dark-content' | 'light-content';
}

export default function Page({
	children,
	navBarColor = '#f0f4ff',
	navBarBtnStyle = 'dark',
	statusBarColor = '#F0F4FF',
	statusBarStyle = 'dark-content',
	...props
}: PageProps) {
	const { loading } = useAuthContext();

	useLayoutEffect(() => {
		NavigationBar.setBackgroundColorAsync('white');
		NavigationBar.setButtonStyleAsync(navBarBtnStyle);
	}, []);

	return (
		<Container>
			<StatusBar
				backgroundColor={statusBarColor}
				barStyle={statusBarStyle}
			/>

			{children}

			<Loading loading={loading} />
		</Container>
	);
}

const Container = styled.SafeAreaView`
	flex: 1;
	background-color: #f0f4ff;
`;
