import styled from 'styled-components';

export const FriendsBox = styled.div`
  max-width: 350px;
  margin: 20px auto 0 auto;
  background-color: ${props => props.theme.colors.lightGrey};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const FriendsList = styled.ul`
  list-style: none;
  padding: ${props => props.theme.space[0]}px;
`;

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  border: ${props => props.theme.borders.normal};
  padding-left: ${props => props.theme.space[5]}px;
  }
`;

export const FriendStatus = styled.span`
  margin-right: ${props => props.theme.space[5]}px;
  width: ${props => props.theme.space[4]}px;
  height: ${props => props.theme.space[4]}px;
  border-radius: ${props => props.theme.radii.round};
  background-color: ${props => (props.status ? 'green' : 'red')};
`;

export const FriendImg = styled.img`
   width: ${props => props.theme.space[6]}px;
   margin-right: ${props => props.theme.space[4]}px;
`;

export const FriendName = styled.p`
  font-size: ${props => props.theme.fontSizes.l};
  color: ${props => props.theme.colors.text};
`;