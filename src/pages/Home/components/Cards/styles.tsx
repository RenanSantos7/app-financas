import styled from 'styled-components/native';

export const Container = styled.View`
	height: 250px;
	padding-bottom: ${({ theme }) => theme.sizes.spacing}px;
`;

const Card = styled.View`
	margin: ${({ theme }) => theme.sizes.spacing}px;
	margin-right: 0;
	width: 300px;
	border-radius: ${({ theme }) => theme.sizes.borderRadius.main}px;
	padding: ${({ theme }) => theme.sizes.spacing}px;
	justify-content: center;
`;

export const CardTitle = styled.Text`
	font-size: ${({ theme }) => theme.sizes.font.title3}px;
	font-weight: 700;
	color: white;
`;

export const CardContent = styled.Text`
	font-size: ${({ theme }) => theme.sizes.font.max}px;
	font-weight: 300;
	color: #fff;
`;

export const CardBalance = styled(Card)`
	background-color: ${({ theme }) => theme.colors.primary.main};
`;

export const CardInflow = styled(Card)`
	background-color:${({ theme }) => theme.colors.success};
`;

export const CardOutflow = styled(Card)`
	background-color: ${({ theme }) => theme.colors.danger};
	margin-right: ${({ theme }) => theme.sizes.spacing}px;
`;
