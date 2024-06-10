import {StyleSheet, Text, View} from 'react-native';

export const HeaderComponent = props => {
  const {title} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.divider}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    width: 360,
    height: 60,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#0000001A',
  },

  text: {
    fontSize: 22,
    fontFamily: 'Baloo2-Bold',
    fontWeight: '900',
    marginVertical: 15,
    color: 'black'
  },
  divider: {
    height: 2,
    width: '100%',
    color: ''
  }
});
