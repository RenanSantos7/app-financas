import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';
import { Dispatch, SetStateAction, useState } from 'react';
import { Modal, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Backdrop, Container } from './styles';
import { pt_BR } from './locale';
import Button from '../../../../components/Button';

interface CalendarProps {
	visible: boolean;
	setVisible: Dispatch<SetStateAction<boolean>>;
	onFilter: (date: any) => void;
}

LocaleConfig.locales['pt-br'] = pt_BR;
LocaleConfig.defaultLocale = 'pt-br'

export default function CalendarFilter(props: CalendarProps) {
	const [selectedDate, setSelectedDate] = useState<Date>(new Date());
	const [markedDates, setMarkedDates] = useState({});

	const theme = useTheme();

	function handlDayPress(date: DateData) {
		setSelectedDate(new Date(date.dateString));
		const markedDay = {};
		// @ts-ignore
		markedDay[date.dateString] = {
			selected: true,
			selectedColor: theme.colors.primary.main,
			textColor: 'white',
		};
		setMarkedDates(markedDay);
	}

	function handleFilter() {
		props.onFilter(selectedDate);
		props.setVisible(false);
	}

	return (
		<Modal visible={props.visible} animationType='fade' transparent>
			<TouchableWithoutFeedback
				onPressOut={() => {
					props.setVisible(false);
				}}
			>
				<Backdrop />
			</TouchableWithoutFeedback>
			<Container>
				<Calendar
					onDayPress={handlDayPress}
					markedDates={markedDates}
					enableSwipeMonths
					theme={{
						calendarBackground: '#fffff00',
						todayButtonTextColor: theme.colors.primary.light,
						todayButtonFontWeight: '700',
						selectedDayBackgroundColor: theme.colors.primary.light,
                        selectedDayTextColor: 'white',
                        arrowColor: theme.colors.text.light,
                    }}
				/>

				<Button title='Filtrar' onPress={handleFilter} />
			</Container>
		</Modal>
	);
}
