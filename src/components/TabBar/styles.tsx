import styled from 'styled-components/native';

interface Items {
	$color: string;
}

export const TabBarContainer = styled.View`
	width: 100%;
	flex-direction: row;
	padding-block: 8px;
	border-top-width: 1px;
	border-top-color: ${({ theme }) => theme.colors.text.light};
	box-shadow: 0 0 15px #cccccc20;
`;

export const NavButton = styled.Pressable`
	justify-content: center;
	align-items: center;
	flex: 1;
`;

export const ButtonAdd = styled.TouchableOpacity`
	background-color: ${({ theme }) => theme.colors.primary.main};
	position: relative;
    top: -15px;
	padding: 16px;
	border-radius: 500px;
`;

export const NavLabel = styled.Text<Partial<Items>>`
	font-size: 16px;
	text-align: center;
	color: ${props => props.$color};
`;
