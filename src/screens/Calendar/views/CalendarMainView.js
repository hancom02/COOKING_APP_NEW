import { StyleSheet, View, Text } from "react-native";

const CalendarMainView = (props) => {
    const {
        navigation, 
        
    } = props

    return (
        <View style={styles.container}>
            <Text>Calendar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default CalendarMainView;