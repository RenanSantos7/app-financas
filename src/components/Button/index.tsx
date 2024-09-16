import { GestureResponderEvent } from 'react-native';
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
	onPress?: (event: GestureResponderEvent) => void;
	variant?: 'primary' | 'secondary' | 'outlined' | 'only-text';
	color?: string;
	disabled?: boolean;
}

export default function Button({ disabled = false, ...props }: ButtonProps) {
	if (props.variant === 'only-text') {
		return (
			<OnlyTxtBtn
				activeOpacity={0.9}
				onPress={props.onPress}
				underlayColor='#6567DD10'
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
			disabled={disabled}
			$disabled={disabled}
			onPress={props.onPress}
			$color={props.color}
		>
			<PrimaryButtonTxt>{props.title}</PrimaryButtonTxt>
		</PrimaryButton>
	);
}
