import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar/Avatar';
import ProfileDes from './ProfileDes/ProfileDes';
import Stats from './Stats/Stats';
import './Profile.css';

function Profile({ avatar, name, tag, location, stats }) {
  return (
    <div className="profile">
      <Avatar avatar={avatar} />
      <ProfileDes name={name} tag={tag} location={location} />
      <Stats stats={stats} />
    </div>
  );
}

export default Profile;

Profile.defaultProps = {
  stats: {
    followers: 0,
    views: 0,
    likes: 0,
  },
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
