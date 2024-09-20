import { Dispatch, SetStateAction } from 'react';
import { Label, StyledTextInput } from './styles';
import { View } from 'react-native';

interface InputProps {
	label?: string;
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
	placeholder?: string;
    isPassword?: boolean;
	autoCapitalize?: boolean;
	autoFocus?: boolean;
}

export default function Input({ autoCapitalize = false, ...props }: InputProps) {
	return (
		<View>
			{props.label && (<Label>{props.label}</Label>)}
			<StyledTextInput
				value={props.value}
				onChangeText={text => props.setValue(text)}
	            placeholder={props.placeholder}
	            cursorColor='#3B3DBF'
	            selectionColor='#8aa7d3'
	            underlineColorAndroid='transparent'
				secureTextEntry={props.isPassword || false}
				autoCapitalize={autoCapitalize ? 'sentences' : 'none'}
				autoFocus={!!props.autoFocus}
			/>
		</View>
	);
}

