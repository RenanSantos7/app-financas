import styled from 'styled-components/native';

export const Topbar = styled.View`
	width: 100%;
	padding: ${({ theme }) => theme.sizes.spacing}px;
	flex-direction: row;
	gap: ${({ theme }) => theme.sizes.spacing}px;
	align-items: center;
`;

export const TopbarTxt = styled.Text`
	font-size: ${({ theme }) => theme.sizes.font.title1}px;
	color: ${({ theme }) => theme.colors.text.title};
`;
