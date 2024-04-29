const { View, ImageBackground, StyleSheet, Image, Text } = require("react-native");

import { useEffect, useState } from 'react';
import SvgUri from 'react-native-svg';
import Swiper from 'react-native-swiper'
import Slide from './Slide';

const string1 = 'MAKE RECIPES YOUR OWN';
const string2 = 'With TASTYTALE recipe editor, you can easily edit recipes, save adjustment to ingredients, and add additional steps or tips to your preparation.';
const string3 = 'ALL IN ONE PLACE'
const string4 = 'Storing your recipes in TASTYTALE alows you to quickly search, find, and select what you want to cook.'
const string5 = 'COOK FROM YOUR FAVOURITE DEVEICE'
const string6 = 'TASTYTALE stores your recipes in the Cloud so you can access them on any device through our website or Android/iOS app.'

function SplashMainView(props) {
    const {navigation, image1, image2, image3} = props;

    const slide1Props = {image: image2, string1: string1, string2: string2};
    const slide2Props = {image: image1, string1: string3, string2: string4};
    const silde3Props = {image: image3, string1: string5, string2: string6};

    //console.log(image1);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //       // Chuyển hướng đến màn hình HOME
    //       navigation.navigate('Home');
    //     }, 3000); // 3000 milliseconds = 3 giây
    
    //     return () => clearTimeout(timer); // Xóa timer khi component unmounts
    //   }, []);

    const {index, setIndex} = useState(0);

    const handleSwiperIndexChange = (index) => {
        if (index === 2) {
            const timer = setTimeout(() => {
                // Chuyển hướng đến màn hình HOME
                navigation.navigate('Home');
            }, 2000); // 3000 milliseconds = 3 giây
        
            // return () => clearTimeout(timer); // Xóa timer khi component unmounts
        }
    }

    return (
            <Swiper 
                style={styles.swiper} 
                showsButtons={false} 
                horizontal={true}
                autoplay={true}
                dotStyle={styles.dot}
                activeDotColor='orange'
                onIndexChanged={handleSwiperIndexChange}
                //loop={true}
            > 
               
                <Slide{...slide1Props}/>
                <Slide{...slide2Props}/>
                <Slide{...silde3Props}/>               
            </Swiper>
    )
}

export default SplashMainView;


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    swiper: {

    },
    dot: {
        backgroundColor: 'white',
        borderRadius: 4,
        borderColor: 'orange',
        borderWidth: 1
    },
    background: {
      flex: 1,
      resizeMode: 'cover', // 'cover', 'contain', 'stretch', 'repeat', 'center'
      justifyContent: 'center', // 'center', 'flex-start', 'flex-end', 'space-between', 'space-around'
      width: '100%',
      height: '100%'
    },
    content: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        
    },
    subView: {        
        backgroundColor: 'white',
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderWidth: 0,
        
    },
    text: {
      //color: 'white',
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'orange',
      marginBottom: 20,
      marginTop: 0
    },
    text2: {
        fontSize: 26,
        fontWeight: '400',
        marginBottom: 20,
        textAlign: 'center',
    },
    text3: {
        alignContent: 'center',
        textAlign: 'center',
        marginHorizontal: 30,
        fontSize: 16
    }
  });
  