import HeartIcon from '../assets/icons/heart.svg';
import StarIcon from '../assets/icons/star.svg';
import HeartNotActiveIcon from '../assets/icons/heart_not_active.svg';
import {useState} from 'react';
const {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} = require('react-native');

export const ProfileCardComponent = props => {
  const t = 1;
  const {profile} = props;

  const [sendedHeart, setSendedHeart] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.containerAvt}>
        <Image
          style={styles.avt}
          source={{
            uri: profile.image,
          }}
        />
      </View>

      <View
        style={{
          borderWidth: 1,
          borderColor: '#5D59591A',
          marginHorizontal: 10,
        }}></View>

      <View style={styles.containerContent}>
        <View>
          <Text style={styles.textName}>{profile.name} </Text>
        </View>
        <View style={styles.containerTracking}>
          <View style={styles.valueTracking}>
            <HeartIcon style={styles.icon} />
            <Text style={styles.textTracking}>{profile.tracking.heart}</Text>
          </View>
          <View style={styles.valueTracking}>
            <StarIcon style={styles.icon} />
            <Text style={styles.textTracking}>{profile.tracking.star}</Text>
          </View>
          <View style={styles.valueTracking}>
            <Text style={styles.textTracking}>{profile.tracking.review} </Text>
            <Text style={styles.textTracking}>Reviews</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.sendHeart}
        onPress={() => setSendedHeart(!sendedHeart)}>
        {sendedHeart ? (
          <HeartIcon width="24" height="24" />
        ) : (
          <HeartNotActiveIcon />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },

  containerAvt: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  avt: {
    borderRadius: 100,
    height: 60,
    width: 60,
  },

  containerContent: {
    flex: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  textName: {
    fontFamily: 'Baloo2-Bold',
    fontSize: 22,
    fontWeight: '500',
  },
  containerTracking: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  valueTracking: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 16,
    width: 16,
    marginRight: 3,
  },

  textTracking: {
    fontWeight: '300',
    fontSize: 18,
    fontFamily: 'Baloo2-Regular',
  },

  sendHeart: {
    justifyContent: 'center',
  },
});
