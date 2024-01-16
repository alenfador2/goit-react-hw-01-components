import React from "react";
import Profile from "./Profile/Profile";
import Statistics from './Statistics/Statistics';
import user from './Data/user.json';
import data from './Data/data.json'

export const App = () => {
  return (
    <div className="main-container">
<Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
     stats={user.stats}
     views={user.stats.views}
     followers={user.stats.followers}
     likes={user.stats.likes}

      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  )
};
