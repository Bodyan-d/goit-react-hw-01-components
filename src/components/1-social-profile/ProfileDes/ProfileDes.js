import React from 'react';
import PropTypes from 'prop-types';
import './ProfileDes.css';

export default function ProfileDescription({ name, tag, location }) {
  return (
    <div className="description">
      <p className="description-item name">{name}</p>
      <p className="description-item tag">@{tag}</p>
      <p className="description-item location">{location}</p>
    </div>
  );
}

ProfileDescription.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
