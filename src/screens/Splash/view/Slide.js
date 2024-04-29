import { useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native-svg';

const Slide = (props) => {
    const {image, string1, string2} = props

    //console.log(image, " ", string1, " ", string2);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //       // Chuyển hướng đến màn hình HOME
    //       navigation.navigate('Home');
    //     }, 3000); // 3000 milliseconds = 3 giây
    
    //     return () => clearTimeout(timer); // Xóa timer khi component unmounts
    //   }, []);

    return (
        <View style={styles.container}>
            <ImageBackground 
                source={{uri: image}}
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

                        <Text style={styles.text2}>{string1}</Text>

                        <Text style={styles.text3}>{string2}</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

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


export default Slide;