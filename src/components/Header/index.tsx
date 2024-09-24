import { Topbar, TopbarTxt } from './styles';

interface HeaderProps {
	title: string;
}

export default function Header(props: HeaderProps) {
	return (
		<Topbar>
			<TopbarTxt>{props.title}</TopbarTxt>
		</Topbar>
	);
}
