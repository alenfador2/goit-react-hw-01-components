import React from "react";
import Profile from "./Profile/Profile";
import user from './Data/user.json';

export const App = () => {
  return (
    <div>
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
    </div>
  )
};
