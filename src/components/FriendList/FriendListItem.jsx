import PropTypes from 'prop-types';

import {
   FriendsItem,
   FriendStatus,
   FriendImg,
   FriendName,
} from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem>
      <FriendStatus status={isOnline}></FriendStatus>
      <FriendImg src={avatar} alt={name}/>
      <FriendName>{name}</FriendName>
    </FriendsItem>
  );
};

FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

