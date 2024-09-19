import { StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

interface FloatingButtonProps {
    onPress: () => void
};

export default function FloatingButton(props: FloatingButtonProps) {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={props.onPress}
            activeOpacity={0.9}
        >
            <FontAwesome6 name="add" size={28} color="white" />
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3B3DBF',
        position: 'absolute',
        bottom: 50,
        right: 30,
        padding: 16,
        borderRadius: 500,
        elevation: 2
    }
})