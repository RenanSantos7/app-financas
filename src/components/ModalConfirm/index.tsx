import { Modal, Text, View } from 'react-native';
import {
	Background,
	BtnContainer,
	ModalContainer,
	StyledText,
	Title,
} from './styles';
import Button from '../Button';
import { Dispatch, SetStateAction } from 'react';

interface ModalConfirmProps {
	isOpened: boolean;
	setIsOpened: Dispatch<SetStateAction<boolean>>;
	onConfirm: () => void;
}

export default function ModalConfirm(props: ModalConfirmProps) {
	return (
		<Modal visible={props.isOpened} transparent>
			<Background>
				{/* @ts-expect-error typeError with 'elevation' */}
				<ModalContainer elevation={2}>
					<Title>Confirmação</Title>
					<StyledText>Deseja mesmo sair?</StyledText>

					<BtnContainer>
						<Button
							title='Não'
							variant='only-text'
							onPress={() => {
								props.setIsOpened(false);
							}}
                        />
                        
                        <Button
                            title='Sim'
                            onPress={props.onConfirm}
                        />
					</BtnContainer>
				</ModalContainer>
			</Background>
		</Modal>
	);
}
