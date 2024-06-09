import { Dimensions, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const SmallGroupItem = ({groupName, groupImg, handleNavDetailGroup}) => {
    // const {
    //     groupImg,
    //     groupName,
    // } = props;

    return(
        <TouchableOpacity style={styles.container}
            onPress={handleNavDetailGroup}
        >
            <Image 
                source={{uri: groupImg}}
                style={styles.img}
            />
            <Text style={styles.text}>{groupName}</Text>
        </TouchableOpacity>
    )
}

export default SmallGroupItem;

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'green',
        marginRight: 8
    },
    img: {
        width: Dimensions.get("window").width * 0.5,
        height: 114,
        borderRadius: 10
    },
    text: {
        fontFamily: "Baloo2-Regular",
        fontSize: 16,
        textTransform: 'capitalize',
        color: 'black'
    }
})