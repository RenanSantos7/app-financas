import styled from 'styled-components/native';

export const Container = styled.View`
	height: 75%;
	border-top-left-radius: 16px;
	border-top-right-radius: 16px;
	background-color: ${({ theme }) => theme.colors.background.light};
	padding: 16px 14px;
`;

export const Header = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const HeaderTxt = styled.Text`
	font-size: 18px;
	font-weight: 700;
	color: ${({ theme }) => theme.colors.text.title};
`;

export const Separator = styled.View`
	height: 18px;
`;

