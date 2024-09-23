import styled from 'styled-components/native';

interface Items {
	$color: string;
}

export const TabBarContainer = styled.View`
	width: 100%;
	flex-direction: row;
	padding-top: 10px;
`;

export const NavButton = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
	flex: 1;
`;

export const ButtonAdd = styled.TouchableOpacity`
	background-color: #3b3dbf;
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
