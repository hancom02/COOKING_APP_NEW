import { Image, StyleSheet, Text, View } from "react-native"
import { create } from "react-test-renderer";

const HomeMainView = (props) => {
    const {user, image} = props;

    //console.log(image[0]);

    return (
        <View style={styles.container}>
            <Text> Home Main View</Text>
            <Text>{user.name}</Text>

            <Image source={{uri: user.image}} style={styles.image}/>
        </View>
    );
}

export default HomeMainView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        marginTop: 20
    }
})