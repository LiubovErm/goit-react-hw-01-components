import React from 'react';
import PropTypes from 'prop-types';
import {
  ProfileBox,
  UserBox,
  UserImage,
  InfoText,
  StatsList,
  StatsItem,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
    <ProfileBox>
      <UserBox>
        <UserImage src={avatar} alt={username} />
        <InfoText>{username}</InfoText>
        <InfoText>@{tag}</InfoText>
        <InfoText>{location}</InfoText>
      </UserBox>
      <StatsList>
        <StatsItem>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <span>{stats.views}</span>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </StatsItem>
      </StatsList>
    </ProfileBox>
    )
}


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};