import { StyleSheet, Dimensions, StatusBar, Platform } from 'react-native';
// import color from './colors';

export const marginTop = Platform.OS === 'ios' ? '10%' : StatusBar.currentHeight;
export const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: marginTop,
    },

    bottomTabBar: {
        height: 95,
        justifyContent: 'center',
        alignItems: 'center',
    },

    iconView: {
        //height: 43,
        width: 40,
        marginTop: 0,
        //justifyContent: 'center',
        alignItems: 'center',
        //gap: 0,
        backgroundColor: 'orange'
    },

    labelText: {
        fontSize: 13,
        fontWeight: '400',
    },
});
