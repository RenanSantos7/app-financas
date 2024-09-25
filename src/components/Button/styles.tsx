import styled from 'styled-components/native';

interface StButtonProps {
	$color?: string;
	$disabled?: boolean;
}

interface StButtonTxtProps {
	$color?: string;
}

function returnColor(disabled: boolean, color: string, defaultColor: string) {
	const thisColor = color ? color : defaultColor;
	return disabled ? `${thisColor}aa` : thisColor;
}

// % Botões

export const PrimaryButton = styled.TouchableOpacity<StButtonProps>`
	justify-content: center;
	align-items: center;
	padding: 12px;
	border-radius: ${({ theme }) => theme.sizes.borderRadius.main}px;
	background-color: ${props =>
		returnColor(
			props.$disabled,
			props.$color,
			`${props.theme.colors.primary.main}`,
		)};
`;

export const OutlinedButton = styled.TouchableHighlight<StButtonProps>`
	justify-content: center;
	align-items: center;
	padding: 12px;
	border-radius: ${({ theme }) => theme.sizes.borderRadius.main}px;
	border-width: 1px;
	border-color: ${props =>
		returnColor(
			props.$disabled,
			props.$color,
			`${props.theme.colors.danger}`,
		)};
`;

export const OnlyTxtBtn = styled.TouchableHighlight<Partial<StButtonProps>>`
	justify-content: center;
	align-items: center;
	padding: 12px;
	border-radius: ${({ theme }) => theme.sizes.borderRadius.main}px;
`;

// % Texto

const ButtonTxt = styled.Text<StButtonTxtProps>`
	font-size: ${({ theme }) => theme.sizes.font.body}px;
	font-weight: 700;
`;

export const PrimaryButtonTxt = styled(ButtonTxt)`
	color: white;
`;

export const OnlyTxtBtnTxt = styled(ButtonTxt)`
	color: ${({ theme }) => theme.colors.text.main};
`;

export const OutlinedButtonTxt = styled(ButtonTxt)<Partial<StButtonProps>>`
	color: ${props =>
		returnColor(
			props.$disabled,
			props.$color,
			`${props.theme.colors.danger}`,
		)};
`;
