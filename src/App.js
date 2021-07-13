import React from 'react';

import profileSettings from '././user.json';
import statisticalData from '././statistical-data.json';
import friendsList from '././friends.json';
import transactions from '././transactions.json';
import './App.css';
import Profile from './components/1-social-profile/Profile';
import Statistics from './components/2-statistics/Statistics';
import Friends from './components/3-friend-list/Friends';
import TransactionHistory from './components/4-transaction-history/TransactionHistory';

function App() {
  return (
    <div className="container">
      <Profile key={profileSettings.tag} settings={profileSettings} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <Friends friendsList={friendsList} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
