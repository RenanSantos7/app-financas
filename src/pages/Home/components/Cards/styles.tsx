import styled from 'styled-components/native';

export const Container = styled.View`
	height: 250px;
	padding-bottom: 14px;
	/* border: 1px solid red; */
`;

const Card = styled.View`
	margin: 14px;
	margin-right: 0;
	width: 300px;
	border-radius: 8px;
	padding: 14px;
	justify-content: center;
`;

export const CardTitle = styled.Text`
	font-size: 18px;
	font-weight: 700;
	color: white;
`;

export const CardContent = styled.Text`
	font-size: 36px;
	font-weight: 300;
	color: #fff;
`;

export const CardBalance = styled(Card)`
	background-color: #3b3dbf;
`;

export const CardInflow = styled(Card)`
	background-color: #6567dd;
`;

export const CardOutflow = styled(Card)`
	background-color: ${({ theme }) => theme.colors.danger};
	margin-right: 14px;
`;
