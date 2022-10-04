import PropTypes from 'prop-types';
import {
    FriendsBox,
    FriendsList,
    FriendsItem,
    FriendStatus,
    FriendImg,
    FriendName,
} from './FriendList.styled';


export const FriendList = ({ friends }) => {
    return (
      <FriendsBox>
        <FriendsList>
          {friends.map(({ avatar, name, isOnline, id }) => (
            <FriendsItem key={id}>
              <FriendStatus status={isOnline}></FriendStatus>
              <FriendImg src={avatar} alt={name} />
              <FriendName>{name}</FriendName>
            </FriendsItem>
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