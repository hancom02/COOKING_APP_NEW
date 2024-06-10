const { View, Text, SafeAreaView, ScrollView, StyleSheet, Dimensions } = require("react-native");

const ProfileMainView = (props) => {
    const {
        navigation,
    } = props;

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text>Profile</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileMainView

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width
    }
})