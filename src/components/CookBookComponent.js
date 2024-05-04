import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

//ICON
//import from 'ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

function CookBookComponent(props) {
    const{
        name,
        introduce,
        image,
        likes,
        recipe_amount
    } = props;

    return(
        <View style={styles.container}>
            <View style={styles.imageBackgroundView}> 
                <ImageBackground
                    source={{uri: image}}
                    style={styles.imageBackground}
                >
                    <View style={styles.contentContainer}>
                        <View style={styles.iconContainer}>
                            <Ionicons name="happy" size={24} color={'orange'} />
                        </View>
                        <Text style={styles.textNameCookBook}>{name}</Text>
                        <Text style={styles.textIntroduce}>{introduce}</Text>
                        <View style={styles.like_recipe_container}>
                            <Text style={styles.textLikeRecipes}>{likes}  Likes</Text>
                            <Text style={styles.divider}>|</Text>
                            <Text style={styles.textLikeRecipes}>{recipe_amount}  Recipes</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 500,
        backgroundColor: 'white',
        borderRadius: 16,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
        //backgroundColor: 'green'
    },
    imageBackgroundView: {
        width: '94%',
        height: '95%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'center',
        overflow: 'hidden',
        //backgroundColor: 'orange',

    },
    imageBackground: {
        width: '100%',
        height: '94%',
        justifyContent: 'flex-end',
        //backgroundColor: 'green'
    },
    contentContainer: {
        backgroundColor: 'white',
        width: '90%',
        height: '60%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        paddingHorizontal: 38,
        paddingVertical: 16
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderColor: 'grey',
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    textNameCookBook: {
        fontSize: 24,
        fontWeight: '700',
        color: 'black',
        textAlign: 'center',
        marginBottom: 10,
    },
    textIntroduce: {
        textAlign: 'center'
    },
    like_recipe_container: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        //backgroundColor: 'green'
    },
    textLikeRecipes: {
        flex: 1,
        fontWeight: '700',
        textAlign: 'center'

    },
    divider: {
        marginHorizontal: 0, 
        color: 'gray', 
    }

    
})

export default CookBookComponent;