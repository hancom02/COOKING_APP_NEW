import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { create } from "react-test-renderer";
import CookBookComponent from "../../../components/CookBookComponent";
import Swiper from "react-native-swiper";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from "react-native-safe-area-context";
import RecipeComponent from "../../../components/RecipeComponent";
import CategoryComponent from "../../../components/CategoryComponent";
import SmallGroupItem from "../../../components/group/SmallGroupItem";
import { ResultComponent } from "../../../components/ResultComponent";

const featured = 'Featured Community Recipes' ;
const getLotOf = 'Get lots of recipe inspiration form the community';
const showAllRecipe = "Show All Recipe by Community";
const category = "Category";

const HomeMainView = (props) => {
    const {navigation, user, image, propsCookbook, RECIPEDATA, CATEGORYDATA, groups} = props;
    console.log("GROUP IN HOME: ", groups);

    const handleSwiperIndexChange = (index) => {
        console.log("Chuyển hướng tới detail cookbox index: ", index);
    }
    const handleNavDetailRecipe = () => {
        console.log("NAVIGATE TO DETAIL RECIPE")
    }
    const handleNavCommunity = () => {
        console.log("NAVIGATE TO COMMUNITY");
    }
    const handleNavDetailGroup = () => {
        navigation.navigate("DetailGroupStack");
    }
    const handleNavGroups = () => {
        navigation.navigate("Group");
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>

                {/* CHÀO MỪNG USER */}
                <View style={styles.userContainer}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={{uri: user.image}} style={styles.imageUser} />
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{fontSize:20, fontWeight: '600', color: "black"}}>Hi {user.name}</Text>
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

                {/* CÁC GROUP HIỆN CÓ */}
                <View style={styles.containerGroup}>
                    <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8}}>
                        <Text style={styles.textCommunityHeader}>Groups</Text>
                        <TouchableOpacity 
                            onPress={() => handleNavGroups()}
                        >
                            <Text style={{color: 'orange'}}>See all</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.groupFlatlist}>
                        <FlatList
                            data={groups}
                            renderItem={({item}) => 
                                <SmallGroupItem
                                    groupName={item.groupName}
                                    groupImg={item.groupImg}
                                    handleNavDetailGroup={() => handleNavDetailGroup()}
                                />
                            }
                            horizontal  
                            showsHorizontalScrollIndicator={false}                  
                        />
                    </View>
                </View>

                {/* COMMUNITY CHỨA CÁC RECIPES */}
                <View style={styles.communityContainer}>
                    <Text style={styles.textCommunityHeader}>{featured}</Text>
                    <Text style={styles.textCommunityIntro}>{getLotOf}</Text>

                    <View>
                        {RECIPEDATA.map((item, index) => 
                            <View key={index} style={{marginBottom: 0}}>
                                {/* <RecipeComponent 
                                    {...item}
                                    handleNavDetailRecipe={handleNavDetailRecipe}
                                /> */}
                                <ResultComponent
                                    navigation={navigation}
                                    recipe={item}
                                    isManager={false}
                                />
                            </View>                     
                        )}
                    </View>
                </View>

                {/* CATEGORY
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
                </View> */}

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
        backgroundColor: 'white'
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
        marginRight: 15,
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
        fontFamily: "Baloo2-SemiBold",
        fontWeight: '600',
        color: 'black'
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
        fontFamily: "Baloo2-SemiBold",
        fontSize: 24,
        fontWeight: '600',
        color: 'black'
    },
    textCommunityIntro: {
        // fontSize: 14,
        // fontWeight: '600'
        fontFamily: "Baloo2-Regular",
        marginBottom: 26,
        color: 'black'
    },
    containerGroup: {
        width: Dimensions.get('window').width - 32,
        marginBottom: 24,
        // backgroundColor: 'orange'

    },
    groupFlatlist: {
        // backgroundColor: 'pink'
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
        fontFamily: "Baloo2-SemiBold",
        fontSize: 24,
        fontWeight: '600', 
        paddingBottom: 16,
        color: "black"
    },
    listCategoryContainer: {
        // flex: 1,
        height: 150,
        // backgroundColor: 'white'
    }
})