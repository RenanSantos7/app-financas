import styled from 'styled-components/native';

export const Background = styled.View`
	flex: 1;
	background-color: #10101050;
`;

export const ModalContainer = styled.View`
	width: 70%;
	margin: auto;
	background-color: white;
	padding: 16px;
	border-radius: 8px;
    overflow: hidden;
`;

export const Title = styled.Text`
	font-size: 18px;
	font-weight: 600;
    margin-bottom: 6px;
`;

export const StyledText = styled.Text`
	font-size: 16px;
`;


export const BtnContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 16px;
`;