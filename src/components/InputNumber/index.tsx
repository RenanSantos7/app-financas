import { Dispatch, SetStateAction, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from 'styled-components/native';
import CurrencyInput from 'react-native-currency-input';

import styles from './styles';

interface InputProps {
	value: number;
	setValue: Dispatch<SetStateAction<number>>;
	placeholder?: string;
	label?: string;
	autoFocus?: boolean;
}

export default function InputNumber(props: InputProps) {
	const theme = useTheme();

	useEffect(() => {
		console.log(theme);
	}, [theme]);

	return (
		<View>
			{props.label && (
				<Text
					style={[{ fontSize: theme.sizes.font.body }, styles.label]}
				>
					{props.label}
				</Text>
			)}
			<CurrencyInput
				value={props.value}
				onChangeValue={props.setValue}
				prefix='R$ '
				precision={2}
				delimiter='.'
				separator=','
				cursorColor='#3B3DBF'
				selectionColor='#8aa7d3'
				autoFocus={!!props.autoFocus}
				style={[
					{
						fontSize: theme.sizes.font.body,
					},
					styles.input,
				]}
			/>
		</View>
	);
}
