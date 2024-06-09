import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ProfileCardComponent} from './ProfileCardComponent';
import TrashIcon from '../assets/icons/trash.svg';
export const ResultComponent = props => {
  const {navigation, recipe, isManager} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerImg}>
        <Image
          style={styles.img}
          source={{
            uri: recipe.image,
          }}
          width={Dimensions.get('window').width - 32}
          height={200}
        />
        {isManager && (
          <TouchableOpacity style={styles.buttonIcon}>
            <TrashIcon width="28" height="28" />
          </TouchableOpacity>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.containerTitle}>
        <Text numberOfLines={2} style={styles.title}>
          {recipe.name}
        </Text>
      </TouchableOpacity>

      <ProfileCardComponent
        navigation={navigation}
        profile={recipe.profile}
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
            opacity: 0.3,
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
    // paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    // backgroundColor: 'pink'
  },

  containerImg: {
    // position: 'relative',
    marginHorizontal: 16,
  },

  img: {
    borderRadius: 10,
    // marginHorizontal: 16,
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
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Baloo2-Bold',
    marginTop: 12,
    marginBottom: 4,
    color: 'black'
  },
});
