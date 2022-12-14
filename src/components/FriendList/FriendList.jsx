import PropTypes from 'prop-types';
import {
    FriendsBox,
    FriendsList,
} from './FriendList.styled';
import { FriendListItem } from "./FriendListItem";


export const FriendList = ({ friends }) => {
    return (
      <FriendsBox>
        <FriendsList>
          {friends.map(({ avatar, name, isOnline, id }) => (
            <FriendListItem
              key={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
            />
            ))}
        </FriendsList>
      </FriendsBox>
    );
  };

  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      })
    ),
};
  