import {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderNavigationComponent from '../../../components/header/HeaderNavigationComponent';
import {ResultComponent} from '../../../components/ResultComponent';
import EditIcon from '../../../assets/icons/edit.svg';
const DetailGroupMainView = props => {
  const {navigation, cookBookDatas} = props;
  const [joinedGroup, setJoniedGroup] = useState(true);

  // Chuyển page thoi nha, có gì xóa cũm được
  const [isManager, setIsManager] = useState(true);
  const handleManager = () => {
    setIsManager(!isManager);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{marginHorizontal: 16}}>
        <HeaderNavigationComponent
          navigation={navigation}
          joinedGroup={joinedGroup}
          handleManager={handleManager}
        />
        <View>
          <View style={styles.containerHeaderInfo}>
            <Image
              source={{
                uri: 'https://www.englishclub.com/images/vocabulary/food/cooking/cooking.jpg',
              }}
              height={174}
            />
            {isManager && (
              <TouchableOpacity style={styles.iconEditHeaderInfo}>
                <EditIcon width="30" height="30" />
              </TouchableOpacity>
            )}
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: 16,
            }}>
            <Text style={styles.nameGroup}>Group for diet food</Text>
            {isManager && (
              <TouchableOpacity>
                <EditIcon width="30" height="30" />
              </TouchableOpacity>
            )}
          </View>

          {isManager ? (
            <TouchableOpacity style={styles.buttonJoinGroup}>
              <Text style={styles.textButonJoin}>Delete Group</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[
                styles.buttonJoinGroup,
                joinedGroup ? styles.buttonLeaveGroup : '',
              ]}
              onPress={() => setJoniedGroup(!joinedGroup)}>
              <Text
                style={[
                  styles.textButonJoin,
                  joinedGroup ? styles.textButtonLeave : '',
                ]}>
                {joinedGroup ? 'Leave Group' : 'Join Group'}
              </Text>
            </TouchableOpacity>
          )}

          <View style={styles.line}></View>
        </View>
        <View style={styles.containerResult}>
          {cookBookDatas &&
            cookBookDatas.map(cookBook => (
              <ResultComponent
                navigation={navigation}
                key={cookBook.id}
                cookBook={cookBook}
                isManager={isManager}
              />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  containerHeaderInfo: {
    position: 'relative',
  },

  iconEditHeaderInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    zIndex: 100,
    width: 40,
    height: 40,
    right: 16,
    bottom: 16,
  },
  nameGroup: {
    marginVertical: 12,
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Baloo2-ExtraBold',
  },

  buttonJoinGroup: {
    paddingVertical: 12,
    paddingHorizontal: 120,
    backgroundColor: '#FFB731',
    marginHorizontal: 16,
    borderRadius: 3,
  },

  buttonLeaveGroup: {
    backgroundColor: '#DADADA',
  },

  textButonJoin: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Baloo2-SemiBold',
    textAlign: 'center',
    width: '100%',
  },

  textButtonLeave: {
    color: '#000000',
  },

  line: {
    height: 4,
    backgroundColor: '#CCCCCC',
    marginTop: 20,
  },

  containerResult: {
    paddingTop: 20,
  },
});
export default DetailGroupMainView;
