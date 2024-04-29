import { StyleSheet, View, Text } from "react-native";

const RecipeAddMainView = (props) => {
    const {
        navigation, 
        
    } = props

    return (
        <View style={styles.container}>
            <Text>Recipe Add Form</Text>
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

export default RecipeAddMainView;