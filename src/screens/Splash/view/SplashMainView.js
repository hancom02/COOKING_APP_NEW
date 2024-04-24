const { View, ImageBackground, StyleSheet, Image, Text } = require("react-native");

import { useEffect } from 'react';
import SvgUri from 'react-native-svg';

function SplashMainView(props) {
    const {navigation, image1, image2, image3} = props;

    //console.log(image1);

    useEffect(() => {
        const timer = setTimeout(() => {
          // Chuyển hướng đến màn hình HOME
          navigation.navigate('Home');
        }, 3000); // 3000 milliseconds = 3 giây
    
        return () => clearTimeout(timer); // Xóa timer khi component unmounts
      }, []);

    return (
        <View style={styles.container}>            
            <ImageBackground 
                source={{uri: image2}}
                style={styles.background}
            > 
                <View style={styles.content}>
                    <View style={styles.subView}>
                        <Image source={require('../../../assets/Union.svg')}/>
                        {/* <SvgUri
                            width="200"
                            height="200"
                            source={require('../../../assets/Union.svg')}
                        /> */}

                        <Text style={styles.text}>TASTYTALE</Text>

                        <Text style={styles.text2}>MAKE RECIPES YOUR OWN</Text>

                        <Text style={styles.text3}>With TASTYTALE recipe editor, you can easily edit recipes, save adjustment to ingredients, and add additional steps or tips to your preparation.</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default SplashMainView;


const styles = StyleSheet.create({
    container: {
        flex: 1
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
        marginBottom: 20
    },
    text3: {
        alignContent: 'center',
        textAlign: 'center',
        marginHorizontal: 30,
        fontSize: 16
    }
  });
  