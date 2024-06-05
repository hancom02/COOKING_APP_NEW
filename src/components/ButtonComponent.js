import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ButtonComponent = props => {
  const {name, onClick, isSelected} = props;
  return (
    <TouchableOpacity
      onPress={onClick}
      style={[styles.contianer, isSelected ? styles.selectedButton : '']}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contianer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    width: 120,
    backgroundColor: '#00000033',
    marginRight: 16,
  },

  selectedButton: {
    backgroundColor: '#FFB731',
  },

  text: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '400',
    fontFamily: 'Baloo2-Regular',
  },
});

export default ButtonComponent;
