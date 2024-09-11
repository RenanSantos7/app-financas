import styled from 'styled-components/native';

interface StButtonProps {
	$color?: string;
}

interface StButtonTxtProps {
	$color?: string;
}

// % Botões

export const PrimaryButton = styled.TouchableOpacity<StButtonProps>`
	justify-content: center;
	align-items: center;
	padding: 12px;
	border-radius: 4px;
	background-color: ${props => props.$color || '#3b3dbf'};
`;

export const OutlinedButton = styled.TouchableHighlight<StButtonProps>`
	justify-content: center;
	align-items: center;
	padding: 12px;
	border-radius: 4px;
	border-width: 1px;
	border-color: ${props => props.$color || '#C62C36'};
	`;

export const OnlyTxtBtn = styled.TouchableHighlight`
	justify-content: center;
	align-items: center;
	padding: 12px;
	border-radius: 4px;
`;

// % Texto

export const PrimaryButtonTxt = styled.Text`
	font-size: 20px;
	font-weight: 700;
	color: white;
`;

export const OnlyTxtBtnTxt = styled.Text`
	font-size: 18px;
`;

export const OutlinedButtonTxt = styled.Text<StButtonTxtProps>`
	font-size: 18px;
	color: ${props => props.$color || '#C62C36'};
`;
