import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { Topbar, TopbarTxt } from './styles';

interface HeaderProps {
    title: string;
}

export default function Header(props: HeaderProps) {
    const navigation = useNavigation();

    function handleClick() {
    }

	return (
		<Topbar>
            <FeatherIcon name='menu' size={24} />
            <TopbarTxt>{props.title}</TopbarTxt>
		</Topbar>
	);
}
