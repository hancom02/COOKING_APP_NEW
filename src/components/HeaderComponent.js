import {StyleSheet, Text, View} from 'react-native';

export const HeaderComponent = props => {
  const {title} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
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
    height: 80,
    width: '100%',
  },

  text: {
    fontSize: 30,
    fontFamily: 'Baloo2-Bold',
    fontWeight: '900',
    marginVertical: 15,
  },
});
