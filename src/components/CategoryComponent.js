const { View, TouchableOpacity, Image, Text, StyleSheet } = require("react-native");

function CategoryComponent (props) {
    const {
        category_name,
        image,

    } = props;

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.image} source={{uri: image}} resizeMode='cover' />
                <Text style={styles.textCategory}>{category_name}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 76,
        // alignItems: 'center',
        alignContent: 'center',
        marginRight: 16,
        // backgroundColor: 'pink'
    },
    image: {
        width: 76,
        height: 76,
        borderRadius: 16,
        marginBottom: 8,
    },
    textCategory: {
        textAlign: 'center'
    }
})

export default CategoryComponent;