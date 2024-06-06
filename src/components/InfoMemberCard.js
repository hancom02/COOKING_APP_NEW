import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const InfoMemberCard = props => {
  const {nember, isManager} = props;
  const [isfollow, setIsFollow] = useState(true);

  useEffect(() => {
    setIsFollow(nember.follow);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image
          style={styles.avt}
          source={{
            uri: nember.image,
          }}
          height={60}
          width={60}
        />

        <Text style={styles.name}>{nember.name}</Text>
      </View>

      <View>
        {isManager ? (
          <TouchableOpacity style={[styles.button, styles.unFollow]}>
            <Text style={[styles.textButton, styles.textUnFollow]}>Remove</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.button, isfollow ? styles.unFollow : styles.follow]}
            onPress={() => {
              setIsFollow(!isfollow);
            }}>
            <Text
              style={[
                styles.textButton,
                isfollow ? styles.textUnFollow : styles.textFollow,
              ]}>
              {isfollow ? 'Unfollow' : 'FOLLOW'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 21,
  },

  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avt: {
    borderRadius: 100,
    marginRight: 18,
  },

  name: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Baloo2-SemiBold',
  },

  button: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 12,
  },

  follow: {
    backgroundColor: '#FF8527',
  },

  unFollow: {
    backgroundColor: '#5D59591A',
  },
  textButton: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Baloo2-SemiBold',

    marginVertical: 3,
  },

  textFollow: {
    color: '#FFFFFF',
    marginHorizontal: 19.5,
  },

  textUnFollow: {
    color: '#000000',
    marginHorizontal: 10,
  },
});

export default InfoMemberCard;
