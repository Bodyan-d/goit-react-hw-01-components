import React from 'react';
import Profile from './components/1-social-profile/Profile';
import profilesSettings from '././user.json';
import './App.css';

function App() {
  return (
    <div className="container">
      {profilesSettings.map(profile => (
        <Profile key={profile.tag} settings={profile} />
      ))}
    </div>
  );
}

export default App;
