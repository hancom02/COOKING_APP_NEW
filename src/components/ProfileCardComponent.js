import HeartIcon from '../assets/icons/heart.svg';
import StarIcon from '../assets/icons/star.svg';
import CommentIcon from '../assets/icons/comment.svg';
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
  const {
    profile, 
    // isManager
  } = props;

  const [sendedHeart, setSendedHeart] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.containerAvt}>
        <Image
          style={styles.avt}
          source={{
            uri: profile.image,
          }}
          height={48}
          width={48}
        />
      </View>

      <View style={[styles.containerContent, 
        {marginLeft: 12}

      ]}>
        <View>
          <Text style={styles.textName}>{profile.name} </Text>
        </View>
        <View style={styles.containerTracking}>
          <View style={styles.valueTracking}>
            <HeartIcon style={styles.icon} />
            <Text style={styles.textTracking}>{profile.tracking.heart}</Text>
          </View>
            <View
              style={{
                width: 3,
                height: 3,
                backgroundColor: '#636773',
                borderRadius: 100,
              }}>
            </View>

          <View style={styles.valueTracking}>
            <StarIcon style={styles.icon} />
            <Text style={styles.textTracking}>{profile.tracking.star}</Text>
          </View>

          <View
            style={{
              width: 3,
              height: 3,
              backgroundColor: '#636773',
              borderRadius: 100,
            }}></View>

          <View style={styles.valueTracking}>
            <CommentIcon style={styles.icon} />
            <Text style={styles.textTracking}>{profile.tracking.star}</Text>
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
  },

  containerAvt: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  avt: {
    borderRadius: 100,
    height: 56,
    width: 56,
  },

  containerContent: {
    flex: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  textName: {
    fontFamily: 'Baloo2-Bold',
    fontSize: 18,
    fontWeight: '500',
    color: 'black'
  },
  containerTracking: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },

  valueTracking: {
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
    fontSize: 17,
    fontFamily: 'Baloo2-Regular',
    color: 'black'
  },

  sendHeart: {
    justifyContent: 'center',
    marginLeft: 60,
  },
});
