import styled from 'styled-components/native';

interface ButtonProps {
	selected: boolean;
}

export const Container = styled.SafeAreaView`
	padding: 16px;
	gap: 16px;
`;

export const BtnContainer = styled.View`
	flex-direction: row;
	gap: 12px;
`;

export const SwitchButton = styled.Pressable<ButtonProps>`
    flex-grow: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 12px;
    background-color: ${props => props.selected ? 'white' : `${props.theme.colors.background.inactive}`};
    border: ${props => props.selected ? `2px solid ${props.theme.colors.primary.main}` : 'none'};
    border-radius: 8px;
    gap: 8px;
`;

export const ButtonTxt = styled.Text`
  font-size: 20px;
`;
