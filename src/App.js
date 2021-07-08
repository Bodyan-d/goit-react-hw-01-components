import React from 'react';
import Profile from './components/1-social-profile/Profile';
import profilesSettings from '././user.json';
import statisticalData from '././statistical-data.json';
import './App.css';
import Statistics from './components/2-statistics/Statistics';

function App() {
  return (
    <div className="container">
      {profilesSettings.map(profile => (
        <Profile key={profile.tag} settings={profile} />
      ))}
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
    </div>
  );
}

export default App;
