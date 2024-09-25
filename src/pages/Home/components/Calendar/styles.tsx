import styled from 'styled-components/native';

export const Backdrop = styled.View`
	/* border: 1px solid red; */
	flex: 1;
    background-color: #10101020;
`;

export const Container = styled.View`
	position: absolute;
	bottom: 0;
    margin-top: -12px;
	width: 100%;
	padding: ${({ theme }) => theme.sizes.spacing}px;
	background-color: ${({ theme }) => theme.colors.background.light};
    border-top-left-radius: ${({ theme }) => theme.sizes.borderRadius.large}px;
    border-top-right-radius: ${({ theme }) => theme.sizes.borderRadius.large}px;
	gap: 24px;
`;
