const { TouchableOpacity, StyleSheet, Text, View } = require("react-native")
import Ionicons from 'react-native-vector-icons/Ionicons';

const AccountItem = ({iconname, title, handlePress}) => {
    return(
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <View style={styles.container1}>
                <View style={styles.containerIcon}>
                    <Ionicons name={iconname} size={32} color="black"/>
                </View>
                <Text style={styles.text}>{title}</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={24} color="black"/>
        </TouchableOpacity>
    )
}
export default AccountItem

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // borderBottomWidth: 0.5

        // backgroundColor: 'green',

    },
    container1: {
        flexDirection: 'row',
        // backgroundColor: 'green'
    },
    containerIcon: {
        height: '100%',
        width: 60,
        alignItems: 'center'
    },
    text: {
        color: 'black',
        fontFamily: "Baloo2-Medium",
        fontSize: 20,
    }
})