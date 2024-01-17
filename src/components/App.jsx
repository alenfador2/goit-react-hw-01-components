import React from "react";
import Profile from "./Profile/Profile";
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import transactions from './Data/transactions.json';
import friends from './Data/friends.json'
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
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  )
};
