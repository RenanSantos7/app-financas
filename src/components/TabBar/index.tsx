import {
	ParamListBase,
	TabNavigationState,
	useNavigation,
} from '@react-navigation/native';
import MaterialComIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { ButtonAdd, NavButton, NavLabel, TabBarContainer } from './styles';
import { AppRoutesParams } from '../../types/types';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components/native';

interface TabBarProps {
	state: TabNavigationState<ParamListBase>;
}

interface TabBarButtonProps {
	title?: string;
	icon: string;
	iconInactive?: string;
	isFocused: boolean;
	onPress: () => void;
}

export default function TabBar({ state }: TabBarProps) {
	const navigation =
		useNavigation<BottomTabNavigationProp<AppRoutesParams>>();

	return (
		<TabBarContainer>
			<TabBarButton
				title='Início'
				icon='home-variant'
				iconInactive='home-variant-outline'
				isFocused={state.index === 0}
				onPress={() => {
					navigation.navigate('Home');
				}}
			/>

			<ButtonAdd
				onPress={() => {
					navigation.navigate('Registrar');
				}}
			>
				<MaterialComIcons name='plus' color='white' size={30} />
			</ButtonAdd>

			<TabBarButton
				title='Perfil'
				icon='account-circle'
				iconInactive='account-circle-outline'
				isFocused={state.index === 2}
				onPress={() => {
					navigation.navigate('Perfil');
				}}
			/>
		</TabBarContainer>
	);
}

function TabBarButton(props: TabBarButtonProps) {
	const theme = useTheme();

	const color = props.isFocused
		? `${theme.colors.primary.main}`
		: `${theme.colors.text.light}`;

	return (
		<NavButton onPress={props.onPress}>
			<MaterialComIcons
				//@ts-expect-error
				name={
					props.isFocused
						? props.icon
						: !!props.iconInactive
							? props.iconInactive
							: props.icon
				}
				size={28}
				color={color}
			/>
			<NavLabel $color={color}>{props.title}</NavLabel>
		</NavButton>
	);
}
