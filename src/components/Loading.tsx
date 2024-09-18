import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

interface LoadingProps {
	loading: boolean;
}

export default function Loading(props: LoadingProps) {
	if (props.loading) {
		return (
			<StyledView>
				<ActivityIndicator size={50} color='white' />
			</StyledView>
		);
	}
}

const StyledView = styled.View`
	position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    align-content: center;
    justify-content: center;
	background-color: hsla(0, 0%, 0%, 0.4);
`;
