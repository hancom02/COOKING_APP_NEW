import React from 'react';
import GroupMemberContainer from './GroupMemberContainer';

const GroupMember = props => {
  const {navigation} = props;

  const groupNemberContainerProps = {
    //dispatch,
    navigation,
  };

  return <GroupMemberContainer {...groupNemberContainerProps} />;
};

export default GroupMember;
