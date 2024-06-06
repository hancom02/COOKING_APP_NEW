import GroupMemberMainView from './views/GroupMemberMainView';

const GroupMemberContainer = props => {
  const {navigation, dispatch} = props;

  const nembers = [
    {
      id: 1,
      image:
        'https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/175607/Originals/avt-cho-cute%20(22).jpg',
      name: 'Nguyen Thi A',
      follow: true,
    },
    {
      id: 2,
      image:
        'https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/175607/Originals/avt-cho-cute%20(22).jpg',
      name: 'Nguyen',
      follow: true,
    },
    {
      id: 3,
      image:
        'https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/175607/Originals/avt-cho-cute%20(22).jpg',
      name: 'Thi A',
      follow: false,
    },
    {
      id: 4,
      image:
        'https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/175607/Originals/avt-cho-cute%20(22).jpg',
      name: 'Nguyen Thi A',
      follow: true,
    },
    {
      id: 5,
      image:
        'https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/175607/Originals/avt-cho-cute%20(22).jpg',
      name: 'Nguyen Thi A',
      follow: false,
    },
    {
      id: 6,
      image:
        'https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/175607/Originals/avt-cho-cute%20(22).jpg',
      name: 'Nguyen Thi A',
      follow: true,
    },
    {
      id: 7,
      image:
        'https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/175607/Originals/avt-cho-cute%20(22).jpg',
      name: 'Nguyen',
      follow: true,
    },
    {
      id: 8,
      image:
        'https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/175607/Originals/avt-cho-cute%20(22).jpg',
      name: 'Thi A',
      follow: false,
    },
    {
      id: 9,
      image:
        'https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/175607/Originals/avt-cho-cute%20(22).jpg',
      name: 'Nguyen Thi A',
      follow: true,
    },
    {
      id: 10,
      image:
        'https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/175607/Originals/avt-cho-cute%20(22).jpg',
      name: 'Nguyen Thi A',
      follow: false,
    },
    {
      id: 11,
      image:
        'https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/175607/Originals/avt-cho-cute%20(22).jpg',
      name: 'Nguyen Thi A',
      follow: true,
    },
    {
      id: 12,
      image:
        'https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/175607/Originals/avt-cho-cute%20(22).jpg',
      name: 'Nguyen',
      follow: true,
    },
    {
      id: 13,
      image:
        'https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/175607/Originals/avt-cho-cute%20(22).jpg',
      name: 'Thi A',
      follow: false,
    },
    {
      id: 14,
      image:
        'https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/175607/Originals/avt-cho-cute%20(22).jpg',
      name: 'Nguyen Thi A',
      follow: true,
    },
    {
      id: 15,
      image:
        'https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/175607/Originals/avt-cho-cute%20(22).jpg',
      name: 'Nguyen Thi A',
      follow: false,
    },
  ];
  const groupNember = {
    navigation,
    nembers,
  };
  return <GroupMemberMainView {...groupNember} />;
};

export default GroupMemberContainer;
