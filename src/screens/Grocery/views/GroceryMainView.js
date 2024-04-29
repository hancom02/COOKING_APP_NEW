const { View, StyleSheet, Text } = require("react-native");

const GroceryMainView = (props) => {
    const {
        navigation,

    } = props;

    return (
        <View style={styles.container}>
            <Text> Grocery </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

})

export default GroceryMainView;