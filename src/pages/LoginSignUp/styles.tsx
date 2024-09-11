import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    flex:1;
	justify-content: center;
	align-items: center;
	padding: 30px;
`;

export const Form = styled.View`
	width: 100%;
	gap: 16px;
`;

export const StyledText = styled.Text`
	text-align: center;
`;

export const BtBack = styled.TouchableOpacity`
	width: 100%;
	background-color: #3b3dbf;
	padding: 16px 20px;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    border-radius: 0 0 8px 8px;
`;

export const BtBackTxt = styled.Text`
    color: white;
    font-size: 20px
`;
