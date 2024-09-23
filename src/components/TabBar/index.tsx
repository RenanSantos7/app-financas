import { ParamListBase, TabNavigationState, useNavigation } from '@react-navigation/native';
import MaterialComIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { ButtonAdd, NavButton, NavLabel, TabBarContainer } from './styles';
import { AppDrawerParams } from '../../types/types';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

interface TabBarProps {
    state: TabNavigationState<ParamListBase>;
}

interface TabBarButtonProps {
    title?: string;
	icon: string;
	iconInactive?: string;
    isFocused: boolean;
    path: "Home" | "Registrar" | "Perfil";
}

export default function TabBar({state}: TabBarProps) {
    const navigation = useNavigation<BottomTabNavigationProp<AppDrawerParams>>();

	return (
		<TabBarContainer>
            <TabBarButton
                title='Início'
				icon='home-variant'
				iconInactive='home-variant-outline'
                isFocused={state.index === 0}
                path='Home'
            />

            <ButtonAdd
                onPress={() => {
                    navigation.navigate('Registrar')
                }}
            >
                <MaterialComIcons
                    name='plus'
                    color='white'
                    size={34}
                />
            </ButtonAdd>
            
            <TabBarButton
                title='Perfil'
				icon='account-circle'
				iconInactive='account-circle-outline'
                isFocused={state.index === 2}
                path='Perfil'
			/>
		</TabBarContainer>
	);
}

function TabBarButton(props: TabBarButtonProps) {
    const color = props.isFocused ? '#6567DD' : '#ccc';
    const navigation = useNavigation<BottomTabNavigationProp<AppDrawerParams>>();

	return (
		<NavButton>
			<MaterialComIcons
				//@ts-expect-error
				name={
					props.isFocused
						? props.icon
						: !!props.iconInactive
							? props.iconInactive
							: props.icon
				}
				size={32}
                color={color}
                onPress={() => {
                    navigation.navigate(props.path);
                }}
			/>
			<NavLabel $color={color}>{props.title}</NavLabel>
		</NavButton>
	);
}
