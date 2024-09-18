import { Dispatch, SetStateAction } from 'react';
import { KeyboardTypeOptions } from 'react-native';
import { StyledTextInput } from './styles';

interface InputProps {
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
	placeholder: string;
    isPassword?: boolean;
	keyboardType?: KeyboardTypeOptions;
	autoCapitalize?: boolean;
	autoFocus?: boolean;
}

export default function Input({autoCapitalize = false, ...props}: InputProps) {
	return (
		<StyledTextInput
			value={props.value}
			onChangeText={text => props.setValue(text)}
            placeholder={props.placeholder}
            cursorColor='#3B3DBF'
            selectionColor='#8aa7d3'
            underlineColorAndroid='transparent'
            keyboardType={props.keyboardType || 'default'}
			secureTextEntry={props.isPassword || false}
			autoCapitalize={autoCapitalize ? 'sentences' : 'none'}
			autoFocus={!!props.autoFocus}
		/>
	);
}

