import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { Topbar, TopbarTxt } from './styles';
import { AppDrawerParams } from '../../types/types';

interface HeaderProps {
	title: string;
}

export default function Header(props: HeaderProps) {
	const navigation = useNavigation<DrawerNavigationProp<AppDrawerParams>>();

	function handleClick() {}

	return (
		<Topbar>
			<FeatherIcon
				name='menu'
				size={24}
				onPress={() => navigation.openDrawer()}
			/>
			<TopbarTxt>{props.title}</TopbarTxt>
		</Topbar>
	);
}
