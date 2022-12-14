import PropTypes from 'prop-types';
import {
  ProfileBox,
  UserBox,
  UserImage,
  InfoText,
  StatsList,
  StatsItem,
  StatsText,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
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
          <StatsText>Followers</StatsText>
          <StatsText>{followers}</StatsText>
        </StatsItem>
        <StatsItem>
          <StatsText>Views</StatsText>
          <StatsText>{views}</StatsText>
        </StatsItem>
        <StatsItem>
          <StatsText>Likes</StatsText>
          <StatsText>{likes}</StatsText>
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