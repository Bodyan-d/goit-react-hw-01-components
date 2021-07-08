import React from 'react';
import Avatar from './Avatar/Avatar';
import ProfileDes from './ProfileDes/ProfileDes';
import Stats from './Stats/Stats';
import './Profile.css';

function Profile({ settings: { avatar, name, tag, location, stats } }) {
  return (
    <div className="profile">
      <Avatar avatar={avatar} />
      <ProfileDes name={name} tag={tag} location={location} />
      <Stats stats={stats} />
    </div>
  );
}

export default Profile;
