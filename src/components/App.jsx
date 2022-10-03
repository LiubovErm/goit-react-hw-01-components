import user from '../json/user.json';
import data from '../json/data.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistic';

export const App = () => {
   return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics 
        title="Upload stats" 
        stats={data} 
       />
    </>
  );
};
