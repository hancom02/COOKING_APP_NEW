import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { create } from "react-test-renderer";
import CookBookComponent from "../../../components/CookBookComponent";
import Swiper from "react-native-swiper";
import Ionicons from 'react-native-vector-icons/Ionicons';


const HomeMainView = (props) => {
    const {user, image} = props;

    const propsComponent = {
        name: "Vietnames Traditional Cuisine",
        introduce: "Keep it easy with these simple but delicious recipes.",
        image: "https://media.vneconomy.vn/w800/images/upload/2024/01/13/phos-1920x1280.jpg",
        likes: 17,
        recipe_amount: 8
    };

    //console.log(image[0]);

    const handleSwiperIndexChange = (index) => {
        console.log("Chuyển hướng tới detail cookbox index: ", index);
    }

    return (
        <View style={styles.container}>
            <View style={styles.userContainer}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={{uri: user.image}} style={styles.imageUser} />
                    <View style={{flexDirection: 'column'}}>
                        <Text style={{fontSize:20, fontWeight: '600'}}>Hi {user.name}</Text>
                        <Text>What are you cooking today?</Text>
                    </View>    
                </View>
                <TouchableOpacity>
                    <Ionicons name="notifications-outline" size={28}/>
                </TouchableOpacity>
            </View>

            <View style={styles.cookbookContainer}>
                <View style={styles.cookbookHeader}>
                    <Text style={[styles.textCookbookHeader, {fontSize: 24}]}>Cookbooks</Text>
                    <Text style={[styles.textCookbookHeader, {fontSize: 16}]}>1/3</Text>
                </View>
                
                <View style={styles.cookbookSwiper}>                    
                    <Swiper 
                        style={styles.swiper} 
                        showsButtons={false} 
                        horizontal={true}
                        autoplay={true}
                        dotStyle={styles.dot}
                        activeDotColor='orange'
                        //onIndexChanged={handleSwiperIndexChange}
                        //loop={true}
                    > 
                        <CookBookComponent{...propsComponent}/>
                        <CookBookComponent{...propsComponent}/>
                        <CookBookComponent{...propsComponent}/>           
                    </Swiper>
                </View>


            </View>
            {/* <Image source={{uri: user.image}} style={styles.image}/> */}
        </View>
    );
}

export default HomeMainView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 14,
        paddingVertical: 16,
        justifyContent: 'flex-start',
        alignItems: 'center',
        //backgroundColor: 'green'
    },
    userContainer: {
        flexDirection: 'row',
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'space-between',
        //marginBottom: 20,
        // backgroundColor: 'orange',
    },
    imageUser: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 15
    },
    cookbookContainer: {
        width: '100%',
        height: '75%',
        // backgroundColor: 'orange'
    },
    cookbookHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        //backgroundColor: 'orange'  
    },
    textCookbookHeader: {
        fontWeight: '600'
    },
    cookbookSwiper: {
        width: '100%',
        height: '100%'
    },
    swiper: {

    },
    dot: {
        backgroundColor: 'white',
        borderRadius: 4,
        borderColor: 'orange',
        borderWidth: 1
    },
    image: {
        width: 100,
        height: 100,
        marginTop: 20
    }
})