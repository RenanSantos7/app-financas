import { Dispatch, SetStateAction } from 'react';
import { Label, StyledTextInput } from './styles';
import { KeyboardType, View } from 'react-native';
import { useThemeContext } from '../../contexts/ThemeContext';

interface InputProps {
	label?: string;
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
	placeholder?: string;
	isPassword?: boolean;
	autoCapitalize?: boolean;
	autoFocus?: boolean;
	keyboardType?: KeyboardType;
}

export default function Input({
	autoCapitalize = false,
	...props
}: InputProps) {
	
	const { theme } = useThemeContext();

	return (
		<View>
			{props.label && <Label>{props.label}</Label>}
			<StyledTextInput
				value={props.value}
				onChangeText={text => props.setValue(text)}
				placeholder={props.placeholder}
				cursorColor={theme.colors.primary.main}
				selectionColor='#8aa7d3'
				underlineColorAndroid='transparent'
				secureTextEntry={props.isPassword || false}
				autoCapitalize={autoCapitalize ? 'sentences' : 'none'}
				autoFocus={!!props.autoFocus}
				keyboardType={
					props.keyboardType ? props.keyboardType : 'default'
				}
			/>
		</View>
	);
}
