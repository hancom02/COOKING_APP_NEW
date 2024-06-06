import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ProfileCardComponent} from './ProfileCardComponent';
import TrashIcon from '../assets/icons/trash.svg';
export const ResultComponent = props => {
  const {navigation, cookBook, isManager} = props;
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image
          style={styles.img}
          source={{
            uri: cookBook.image,
          }}
          width={400}
          height={167}
        />
        {isManager && (
          <TouchableOpacity style={styles.buttonIcon}>
            <TrashIcon width="35" height="35" />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{cookBook.name}</Text>
      </View>

      <ProfileCardComponent
        navigation={navigation}
        profile={cookBook.profile}
        isManager={isManager}
      />

      {isManager && (
        <View
          style={{
            borderWidth: 0.5,
            width: '100%',
            backgroundColor: '#D1D1D1',
            marginHorizontal: 16,
            marginTop: 8,
            opacity: 0.5,
          }}></View>
      )}
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
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
  },

  containerImg: {
    position: 'relative',
  },

  img: {
    borderRadius: 10,
  },

  buttonIcon: {
    position: 'absolute',
    top: 12,
    right: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    paddingHorizontal: 3,
    paddingVertical: 3,
    zIndex: 99,
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
