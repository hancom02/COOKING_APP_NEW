import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { create } from "react-test-renderer";
import CookBookComponent from "../../../components/CookBookComponent";
import Swiper from "react-native-swiper";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from "react-native-safe-area-context";
import RecipeComponent from "../../../components/RecipeComponent";
import CategoryComponent from "../../../components/CategoryComponent";

const featured = 'Featured Community Recipes' ;
const getLotOf = 'Get lots of recipe inspiration form the community';
const showAllRecipe = "Show All Recipe by Community";
const category = "Category";

const HomeMainView = (props) => {
    const {navigation, user, image} = props;

    const propsCookbook = {
        name: "Vietnamese Traditional Cuisine",
        introduce: "Keep it easy with these simple but delicious recipes.",
        image: "https://media.vneconomy.vn/w800/images/upload/2024/01/13/phos-1920x1280.jpg",
        likes: 17,
        recipe_amount: 8
    };

    const RECIPEDATA = [
        {
            recipe_name: 'Fried Sausages',
            image: 'https://giadungviet.vn/wp-content/uploads/2021/11/image004.jpg',
            owner: 'Linh Nhi',
            image_owner: 'https://i.pinimg.com/736x/3e/02/a5/3e02a58132717af979963f14d5109d80.jpg',
            likes_amount: 9,
            reviews_amount: 3,
            
        },
        {
            recipe_name: 'Fried Sausages',
            image: 'https://giadungviet.vn/wp-content/uploads/2021/11/image004.jpg',
            owner: 'Linh Nhi',
            image_owner: 'https://i.pinimg.com/736x/3e/02/a5/3e02a58132717af979963f14d5109d80.jpg',
            likes_amount: 9,
            reviews_amount: 3,
        },
        {
            recipe_name: 'Fried Sausages',
            image: 'https://giadungviet.vn/wp-content/uploads/2021/11/image004.jpg',
            owner: 'Linh Nhi',
            image_owner: 'https://i.pinimg.com/736x/3e/02/a5/3e02a58132717af979963f14d5109d80.jpg',
            likes_amount: 9,
            reviews_amount: 3,
        },
    ] 

    const propsRecipe = {
        recipe_name: 'Xúc xích chiên',
        image: 'https://giadungviet.vn/wp-content/uploads/2021/11/image004.jpg',
        owner: 'Linh Nhi',
        image_owner: 'https://i.pinimg.com/736x/3e/02/a5/3e02a58132717af979963f14d5109d80.jpg',
        likes_amount: 9,
        reviews_amount: 3,
    }

    const CATEGORYDATA = [
        {
            category_name: "Seasonal",
            image: 'https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg',            
        },
        {
            category_name: "Cakes",
            image: 'https://cakesbymk.com/wp-content/uploads/2022/11/Template-Size-for-Blog-Photos-8-802x1024.jpg',            
        },
        {
            category_name: "Everyday",
            image: 'https://cdn.tgdd.vn/2020/07/CookRecipe/Avatar/trung-chien-nuoc-mam-thumbnail.jpg',            
        },
        {
            category_name: "Drinks",
            image: 'https://www.liquor.com/thmb/_ByJyW_TPQ0W7W2SkX2qMwxoL7o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/shirley-temple-720x720-primary-e0fa3d9417e94ae18fe5cee2131862fb.jpg',            
        },
    ]

    //console.log(image[0]);

    const handleSwiperIndexChange = (index) => {
        console.log("Chuyển hướng tới detail cookbox index: ", index);
    }
    const handleNavDetailRecipe = () => {
        console.log("NAVIGATE TO DETAIL RECIPE")
    }
    const handleNavCommunity = () => {
        console.log("NAVIGATE TO COMMUNITY");
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>

                {/* CHÀO MỪNG USER */}
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

                {/* COOKBOOK SWIPER */}
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
                            
                        > 
                            <CookBookComponent{...propsCookbook}/>
                            <CookBookComponent{...propsCookbook}/>
                            <CookBookComponent{...propsCookbook}/>           
                        </Swiper>
                    </View>
                </View>

                {/* COMMUNITY CHỨA CÁC RECIPES */}
                <View style={styles.communityContainer}>
                    <Text style={styles.textCommunityHeader}>{featured}</Text>
                    <Text style={styles.textCommunityIntro}>{getLotOf}</Text>

                    <View>
                        {RECIPEDATA.map((item, index) => 
                            <View key={index} style={{marginBottom: 16}}>
                                <RecipeComponent 
                                    {...item}
                                    handleNavDetailRecipe={handleNavDetailRecipe}
                                />
                            </View>                     
                        )}
                    </View>

                    <TouchableOpacity onPress={handleNavCommunity} style={styles.showCommunityContainer}>
                        <Text style={{color: 'orange', textAlign: 'center'}}>{showAllRecipe}</Text>
                    </TouchableOpacity>
                </View>

                {/* CATEGORY */}
                <View style={styles.categoryContainer}>
                    <Text style={styles.textCategoryHeader}>{category}</Text>

                    <View style={styles.listCategoryContainer}>
                        <FlatList 
                            data={CATEGORYDATA}
                            renderItem={({item}) => 
                            <CategoryComponent
                                category_name={item.category_name}
                                image={item.image}
                            />}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeMainView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 14,
        // paddingVertical: 16,
        justifyContent: 'flex-start',
        // alignItems: 'center',
        //backgroundColor: 'green'
    },
    contentContainer: {
        paddingHorizontal: 14,
        paddingVertical: 16,
        paddingBottom: 63,
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: 'orange'
    },
    userContainer: {
        flexDirection: 'row',
        width: '100%',
        // height: 100,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
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
        height: 550,
        marginBottom: 30,
        // backgroundColor: 'orange'
    },
    cookbookHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        // backgroundColor: 'orange'  
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
    },
    textCommunityHeader: {
        fontSize: 24,
        fontWeight: '600'
    },
    textCommunityIntro: {
        // fontSize: 14,
        // fontWeight: '600'
        marginBottom: 26
    },
    communityContainer: {
        width: '100%',
        height: 'auto',
        marginBottom: 20,
        // alignItems: 'center'
        // backgroundColor: 'orange'
    },
    showCommunityContainer: {
        height: 30,
        justifyContent: 'center',
        // backgroundColor: 'pink',
    },
    categoryContainer: {
        height: 160,
        width: '100%',
        // justifyContent: 'flex-start',

        // backgroundColor: 'pink'
    },
    textCategoryHeader: {
        // flex: 1,
        fontSize: 24,
        fontWeight: '600', 
        paddingBottom: 16,
    },
    listCategoryContainer: {
        // flex: 1,
        height: 150,
        // backgroundColor: 'white'
    }
})