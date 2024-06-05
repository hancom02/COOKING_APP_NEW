import GroupContainer from './GroupContainer';

const Group = props => {
  const {navigation} = props;

  const propContainer = {
    navigation,
  };

  return <GroupContainer {...propContainer} />;
};

export default Group;
