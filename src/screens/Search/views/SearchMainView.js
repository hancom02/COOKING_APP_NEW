import { StyleSheet, View, Text } from "react-native";

const SearchMainView = (props) => {
    const {
        navigation, 
        
    } = props

    return (
        <View style={styles.container}>
            <Text>Search</Text>
            <Text>Search</Text>
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

export default SearchMainView;