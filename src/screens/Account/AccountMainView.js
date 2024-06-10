import { HeaderComponent } from "../../components/HeaderComponent"
import AccountItem from "./component/AccountItem"

const { View, StyleSheet, Dimensions } = require("react-native")
const { Text } = require("react-native-svg")

const AccountMainView = (props) => {
    const {
        navigation
    } = props

    const handleNavProfile = () => {
        console.log("NAV TO PROFILE");
    }
    const handleNavGrocery = () => {
        console.log("NAV TO Grocery");
    }
    const handleNavCalendar = () => {
        console.log("NAV TO Calendar");
    }
    const handleNavSetting = () => {
        console.log("NAV TO Setting");
    }
    const handleLogOut = () => {
        console.log("Log out");
    }

    return(
        <View style={styles.container}>
            <HeaderComponent title='Account'/>
            <View style={styles.containerContent}>
                <AccountItem 
                    iconname={"person-circle-outline"}
                    title={'My Profile'}
                    handlePress={() => handleNavProfile()}
                />
                <AccountItem 
                    iconname={"cart-outline"}
                    title={'Grocery'}
                    handlePress={() => handleNavGrocery()}
                />
                <AccountItem 
                    iconname={"calendar-outline"}
                    title={'Calendar'}
                    handlePress={() => handleNavCalendar()}
                />
                <AccountItem 
                    iconname={"settings-outline"}
                    title={'Settings'}
                    handlePress={() => handleNavSetting()}
                />
                <AccountItem 
                    iconname={"log-out-outline"}
                    title={'Log Out'}
                    handlePress={() => handleLogOut()}
                />
            </View>
        </View>
    )
}

export default AccountMainView

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: "white"
    },
    header: {
        width: '100%',
        height: 60,
        borderWidth: 1,
        borderColor: 'grey'
    },
    containerContent: {
        width: '100%',
        paddingHorizontal: 16,
        paddingTop: 16,
        // backgroundColor: 'pink'
    }
})