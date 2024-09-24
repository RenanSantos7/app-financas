import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
	background-color: #f0f2ff;
	width: 100%;
	padding: 16px;
	flex-direction: row;
	justify-content: space-between;
	border-radius: 8px;
	box-shadow: 2px 2px 8px #00000020;
`;

export const Wrapper = styled.View`
	gap: 8px;
`;

const TransactionType = styled.View`
	align-self: flex-start;
	width: 90px;
	flex-direction: row;
	align-items: center;
	gap: 2px;
	padding: 4px;
	border-radius: 4px;
`;

export const TypeIn = styled(TransactionType)`
	background-color: #6567dd;
`;

export const TypeOut = styled(TransactionType)`
	background-color: ${({ theme }) => theme.colors.danger};
`;

export const TypeTxt = styled.Text`
	color: white;
	font-size: 14px;
	font-style: italic;
`;

export const Value = styled.Text`
	font-size: 24px;
	font-weight: 400;
`;

export const Description = styled.Text`
	font-size: 12px;
	font-style: italic;
`;