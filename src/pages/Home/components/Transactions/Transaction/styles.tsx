import styled from 'styled-components/native';

export const Container = styled.View`
	background-color: ${({ theme }) => theme.colors.background.main};
	width: 100%;
	padding: ${({ theme }) => theme.sizes.spacing}px;
	border-radius: 8px;
	box-shadow: 2px 2px 8px #00000020;
	gap: 8px;
`;

const TransactionType = styled.View`
	align-self: flex-start;
	align-items: center;
	width: 75px;
	flex-direction: row;
	gap: 2px;
	padding: 4px;
	border-radius: ${({ theme }) => theme.sizes.borderRadius.small}px;
`;

export const TypeIn = styled(TransactionType)`
	background-color: ${({ theme }) => theme.colors.success};
`;

export const TypeOut = styled(TransactionType)`
	background-color: ${({ theme }) => theme.colors.danger};
`;

export const TypeTxt = styled.Text`
	color: white;
	font-size: ${({ theme }) => theme.sizes.font.small}px;
	font-style: italic;
`;

export const Value = styled.Text`
	font-size: ${({ theme }) => theme.sizes.font.title2}px;
	font-weight: 400;
	color: ${({ theme }) => theme.colors.text.title};
`;

export const Description = styled.Text`
	font-size: ${({ theme }) => theme.sizes.font.small}px;
	font-style: italic;
	color: ${({ theme }) => theme.colors.text.main};
`;
