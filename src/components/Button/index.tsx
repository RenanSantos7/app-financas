import { useTheme } from 'styled-components/native';
import {
	OnlyTxtBtn,
	OnlyTxtBtnTxt,
	OutlinedButton,
	OutlinedButtonTxt,
	PrimaryButton,
	PrimaryButtonTxt,
} from './styles';

interface ButtonProps {
	title: string;
	onPress?: () => void;
	variant?: 'primary' | 'secondary' | 'outlined' | 'only-text';
	color?: string;
	disabled?: boolean;
}

export default function Button({ disabled = false, ...props }: ButtonProps) {
	const theme = useTheme();

	if (props.variant === 'only-text') {
		return (
			<OnlyTxtBtn
				activeOpacity={0.9}
				onPress={props.onPress}
				underlayColor={theme.colors.primary.light}
				disabled={disabled}
			>
				<OnlyTxtBtnTxt>{props.title}</OnlyTxtBtnTxt>
			</OnlyTxtBtn>
		);
	}

	if (props.variant === 'outlined') {
		return (
			<OutlinedButton
				onPress={props.onPress}
				disabled={disabled}
				$color={props.color}
			>
				<OutlinedButtonTxt $color={props.color}>
					{props.title}
				</OutlinedButtonTxt>
			</OutlinedButton>
		);
	}

	return (
		<PrimaryButton
			activeOpacity={0.9}
			onPress={props.onPress}
			disabled={disabled}
			$disabled={disabled}
			$color={props.color}
		>
			<PrimaryButtonTxt>{props.title}</PrimaryButtonTxt>
		</PrimaryButton>
	);
}
