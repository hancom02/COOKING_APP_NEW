import {Image, StyleSheet, Text, View} from 'react-native';
import {ProfileCardComponent} from './ProfileCardComponent';

export const ResultComponent = props => {
  const {cookBook} = props;
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: cookBook.image,
        }}
        width={400}
        height={167}
      />
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{cookBook.name}</Text>
      </View>
      <ProfileCardComponent profile={cookBook.profile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 28,
  },

  img: {
    borderRadius: 10,
  },

  containerTitle: {
    width: '100%',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Baloo2-Bold',
    marginVertical: 12,
  },
});
