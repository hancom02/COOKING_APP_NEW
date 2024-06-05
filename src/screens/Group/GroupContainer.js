const {default: GroupMainView} = require('./views/GroupMainView');

const GroupContainer = props => {
  const {navigation} = props;

  const cookGroups = [
    {
      id: 1,
      image:
        'https://www.shutterstock.com/image-photo/cooking-culinary-profession-concept-international-600nw-2165945381.jpg',
      name: 'Group one',
      nember: 3234,
    },
    {
      id: 2,
      image:
        'https://hospibuz.com/wp-content/uploads/2019/09/Radisson-hotel.jpg',
      name: 'Radisson Hotel Group Cook-Off 2019',
      nember: 1220,
    },
    {
      id: 3,
      image:
        'https://hospibuz.com/wp-content/uploads/2019/09/Radisson-hotel.jpg',
      name: 'Radisson Hotel Group Cook-Off ',
      nember: 30,
    },
    {
      id: 4,
      image:
        'https://hospibuz.com/wp-content/uploads/2019/09/Radisson-hotel.jpg',
      name: 'Radisson Hotel Group Cook-Off abv',
      nember: 120,
    },
    {
      id: 5,
      image:
        'https://hospibuz.com/wp-content/uploads/2019/09/Radisson-hotel.jpg',
      name: 'Radisson Hotel Group Cook-Off 2019',
      nember: 600,
    },
    {
      id: 6,
      image:
        'https://hospibuz.com/wp-content/uploads/2019/09/Radisson-hotel.jpg',
      name: 'Radisson Hotel Group Cook-Off fvcc',
      nember: 100,
    },
    {
      id: 7,
      image:
        'https://hospibuz.com/wp-content/uploads/2019/09/Radisson-hotel.jpg',
      name: 'Radisson Hotel Group Cook-Off 12312',
      nember: 2,
    },
  ];
  const groupProps = {
    navigation,
    cookGroups,
  };

  return <GroupMainView {...groupProps} />;
};

export default GroupContainer;
