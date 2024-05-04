const { View, StyleSheet, Text, Image, TouchableOpacity } = require("react-native");

import { useState } from 'react';
//ICON
//import from 'ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

function RecipeComponent(props) {
    const {recipe_name, image, owner, image_owner, likes_amount, reviews_amount} = props;

    const [isFav, setFav] = useState(false);

    const toggleFav = () => {
        isFav === true ? setFav(false) : setFav(true);
    }

    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: image}}/>
            <Text style={styles.textRecipeName}>{recipe_name}</Text>

            <View style={styles.ownerContainer}>
                <View style={{flexDirection: 'row', width: '80%'}}>
                    <Image source={{uri: 'https://i.pinimg.com/736x/3e/02/a5/3e02a58132717af979963f14d5109d80.jpg'}} style={styles.imageOwner}/>
                    <View style={{width: '40%', justifyContent: 'space-between', }}>
                        <Text style={{color: 'black', flex: 1}}>{owner}</Text>
                        
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1}}>
                            <View style={{flexDirection: 'row', alignItems: 'center',}}>
                                <Ionicons name="heart" color='orange' size={18}/>
                                <Text>  {likes_amount}</Text>
                            </View>
                        
                            <Text>.</Text>

                            <View style={{flexDirection: 'row', alignItems: 'center',}}>
                                <Ionicons name="chatbox" color='orange' size={16}/>
                                <Text>  {reviews_amount}</Text>
                            </View>
                        </View>

                    </View>
                </View>
                <TouchableOpacity onPress={toggleFav}>
                    { isFav === false ? (
                        <Ionicons name="heart-outline" size={24} color='orange'/>
                     ) : (
                        <Ionicons name="heart" size={24} color='orange'/>
                     )
                    }
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 350,
        backgroundColor: 'white',
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        borderRadius: 20,
        overflow: 'hidden'

    },
    image: {
        width: '100%',
        height: '70%',
        // borderRadius: 20,
    },
    textRecipeName: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
    },
    ownerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
        // backgroundColor: 'orange'
    },
    imageOwner: {
        width: 44,
        height: 44,
        borderRadius: 40,
        marginRight: 10
    },
})

export default RecipeComponent;